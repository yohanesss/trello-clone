import React, { useState } from "react";
// import { useFocus } from "./useFocus";
import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput,
  CloseNewItemFormButton,
  NewItemFormActionContainer,
} from "./styles";

interface NewItemFormProps {
  onAdd(text: string): void;
  closeForm(): void;
}

export const NewItemForm = ({ onAdd, closeForm }: NewItemFormProps) => {
  const [text, setText] = useState("");
  // const inputRef = useFocus();
  const handleAddText = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") onAdd(text);
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        // ref={inputRef}
        autoFocus // this solution is also can be used for triggering autofocus when input is loaded rather than attaching ref
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemFormActionContainer>
        <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
        <CloseNewItemFormButton onClick={() => closeForm()}>
          Close
        </CloseNewItemFormButton>
      </NewItemFormActionContainer>
    </NewItemFormContainer>
  );
};
