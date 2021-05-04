import { Action } from './actions';
import { nanoid } from 'nanoid';
import { findItemIndexById } from '../utils/arrayUtils';

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
    default: {
      return state;
    }
  }
};
