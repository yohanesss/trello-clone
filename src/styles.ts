import styled from 'styled-components';

const DARK_BLUE = '#3179ba';
const DARK_GREY = 'darkgrey';
const LIGHT_GREY = '#ebecf0';
const WHITE = '#fff';
const BLACK = '#000';
const GREY = 'grey';
const RED = 'indianred';
const GREEN = 'seagreen';

const FONT_MEDIUM = '14px';
const FONT_SMALL = '12px';
const FONT_XSMALL = '10px';
const FONT_LARGE = '16px';
const FONT_XLARGE = '18px';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${DARK_BLUE};
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
  background-color: ${LIGHT_GREY};
  cursor: pointer;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 4px;
  padding: 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-size: ${FONT_LARGE};
  font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background-color: ${WHITE};
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
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
  color: ${(props) => (props.dark ? BLACK : WHITE)};
  background-color: ${DARK_GREY};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: ${GREY};
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
  background-color: ${GREEN};
  border-radius: 4px;
  border: none;
  box-shadow: none;
  color: ${WHITE};
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
`;

export const CloseNewItemFormButton = styled.button`
  background-color: ${RED};
  border-radius: 4px;
  border: none;
  box-shadow: none;
  color: ${WHITE};
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
`;

export const NewItemInput = styled.input`
  border-radius: 4px;
  border: none;
  box-shadow: ${GREY} 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
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
