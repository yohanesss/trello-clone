import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './state/AppStateContext';
import { Column } from './Column';
import { AddList } from './state/actions';

export const App = () => {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} id={list.id} key={list.id} />
      ))}
      <AddNewItem
        toggleButtonText={'+ Add another list'}
        onAdd={(text) => dispatch(AddList(text))}
      />
    </AppContainer>
  );
};
