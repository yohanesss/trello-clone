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
    case 'MOVE_TASK': {
      const {
        draggedItemId,
        hoveredItemId,
        sourceColumnId,
        targetColumnId,
      } = action.payload;
      const sourceLaneIndex = findItemIndexById(state.lists, sourceColumnId);
      const targetLaneIndex = findItemIndexById(state.lists, targetColumnId);
      const dragIndex = findItemIndexById(
        state.lists[sourceLaneIndex].tasks,
        draggedItemId
      );

      const hoverIndex = hoveredItemId
        ? findItemIndexById(state.lists[targetLaneIndex].tasks, hoveredItemId)
        : 0;

      const item = state.lists[sourceLaneIndex].tasks[dragIndex];
      state.lists[sourceLaneIndex].tasks.splice(dragIndex, 1);
      state.lists[targetLaneIndex].tasks.splice(hoverIndex, 0, item);
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
