import { FC } from "react";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { Card } from "./Card";

export const App: FC = ({ children }) => {
  return (
    <AppContainer>
      <Column text={"Backlog"}>
        <Card text="E2E Testing" />
      </Column>
      <Column text={"In Progress"}>
        <Card text="Create Mobile Layout for Product Pages" />
      </Column>
      <Column text={"Done"}>
        <Card text="Create Mobile Layout for Home Page" />
      </Column>
      <AddNewItem
        toggleButtonText={"+ Add another list"}
        onAdd={(e) => console.log(e)}
      />
    </AppContainer>
  );
};
