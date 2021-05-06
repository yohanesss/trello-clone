import styled from 'styled-components';

const BACKGROUND_COLOR = 'snow';
const DARK_GREY = 'darkgrey';
const ADD_BUTTON_COLOR = 'turquoise';
const ADD_BUTTON_HOVER_COLOR = 'lightseagreen';
const COLUMN_CONTAINER_COLOR = 'blanchedalmond';
const WHITE = '#fff';
const BLACK = '#000';
const GREY = 'grey';
const RED = 'indianred';
const CREATE_BUTTON_COLOR = 'darkseagreen';

const FONT_MEDIUM = '14px';
const FONT_SMALL = '12px';
const FONT_XSMALL = '10px';
const FONT_LARGE = '16px';
const FONT_XLARGE = '18px';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${BACKGROUND_COLOR};
  height: 100%;
  width: 100%;
  padding: 20px;
`;

type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
};

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  })
)<DragPreviewWrapperProps>``;

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transform: ${(props) => (props.isPreview ? 'rotate(5deg)' : undefined)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: ${COLUMN_CONTAINER_COLOR};
  cursor: pointer;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  box-shadow: 1px 1px 5px 0px gainsboro;
  border-radius: 6px;
  padding: 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  text-align: center;
  margin: 10px 0;
  font-size: ${FONT_LARGE};
  font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background-color: ${WHITE};
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
  min-width: 150px;
  max-width: 300px;
  border-radius: 4px;
  font-size: ${FONT_MEDIUM};
  box-shadow: ${DARK_GREY} 0px 1px 1px 0px;
`;

interface AddItemButtonProps {
  dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  /* color: ${(props) => (props.dark ? GREY : WHITE)}; */
  color: ${WHITE};
  background-color: ${ADD_BUTTON_COLOR};
  border-radius: 4px;
  box-shadow: 0 1px 1px 1px gainsboro;
  font-size: ${(props) => (props.dark ? '12px' : '14px')};
  font-weight: bold;
  border: none;
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: ${ADD_BUTTON_HOVER_COLOR};
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemFormActionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewItemButton = styled.button`
  background-color: ${CREATE_BUTTON_COLOR};
  border-radius: 4px;
  border: none;
  font-weight: bold;
  box-shadow: 0 1px 1px 1px gainsboro;
  color: ${WHITE};
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
`;

export const CloseNewItemFormButton = styled.button`
  background-color: ${RED};
  border-radius: 4px;
  border: none;
  font-weight: bold;
  box-shadow: 0 1px 1px 1px gainsboro;
  color: ${WHITE};
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
`;

export const NewItemInput = styled.input`
  border-radius: 4px;
  border: none;
  box-shadow: 0 1px 1px 1px gainsboro;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
