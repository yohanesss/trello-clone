import { createContext, useReducer, useContext, FC, Dispatch } from 'react';
import { AppStateReducer, AppState, List, Task } from './AppStateReducer';
import { Action } from './actions';
import { DragItem } from '../DragItem';

const appData: AppState = {
  draggedItem: null,
  lists: [
    {
      id: '0',
      text: 'Backlog',
      tasks: [{ id: 'c0', text: 'E2E Testing' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c1', text: 'Create Mobile Layout for Product Pages' }],
    },
    {
      id: '3',
      text: 'Done',
      tasks: [{ id: 'c2', text: 'Create Mobile Layout for Home Page' }],
    },
  ],
};

type AppStateContextProps = {
  draggedItem: DragItem | null;
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppStateReducer, appData);

  const { draggedItem, lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{ draggedItem, lists, getTasksByListId, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
