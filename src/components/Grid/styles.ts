import styled from 'styled-components';

interface ContentProps {
  width: string | number;
  height: string | number;
  background: string;
  minHeight: string;
  columns: string | number;
  rows: string | number;
  gap: string | number;
  rowGap: string | number;
  justify:
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'flex-start'
    | 'flex-end';
  placeItems: 'center' | 'normal start';
  borderRadius: string;
  overflowY: 'scroll' | 'hidden' | 'auto';
  opacity: string | number;
  position: string | number;
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
  padding: string | number;
  margin: string | number;
  borderBottom: string | number;
  border: string | number;
}

export const Content = styled.div<ContentProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  gap: ${(props) => props.gap};
  row-gap: ${(props) => props.rowGap};
  justify-content: ${(props) => props.justify};
  place-items: ${(props) => props.placeItems};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  min-height: ${(props) => props.minHeight};
  overflow-y: ${(props) => props.overflowY};
  opacity: ${(props) => props.opacity};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  border-bottom: ${(props) => props.borderBottom};
  border: ${(props) => props.border};
`;