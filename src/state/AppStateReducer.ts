import { Action } from './actions';
import { nanoid } from 'nanoid';
import { findItemIndexById, moveItem } from '../utils/arrayUtils';
import { DragItem } from '../DragItem';

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export const AppStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            text: action.payload,
            tasks: [],
          },
        ],
      };
    }
    case 'ADD_TASK': {
      const { text, listId } = action.payload;
      const targetListId = findItemIndexById(state.lists, listId);

      state.lists[targetListId].tasks.push({
        id: nanoid(),
        text,
      });

      return {
        ...state,
      };
    }
    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(state.lists, draggedId);
      const hoverIndex = findItemIndexById(state.lists, hoverId);
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return {
        ...state,
      };
    }
    case 'SET_DRAGGED_ITEM': {
      return {
        ...state,
        draggedItem: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
