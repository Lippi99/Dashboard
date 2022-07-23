import styled from 'styled-components';

interface ContentProps {
  width: string | number;
  background: string;
  justify:
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'flex-start'
    | 'flex-end';
  align: 'center' | 'flex-start' | 'flex-end';
  wrap: 'flex-wrap' | 'wrap' | 'wrap-reverse';
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap: string | number;
  rowGap: string | number;
  columnGap: string | number;
  height: string | number;
  borderRadius: string;
  overflowY: 'scroll' | 'hidden' | 'auto';
  minHeight: string | number;
  opacity: string | number;
  position: string | number;
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
  padding: string | number;
  margin: string | number;
  borderTop: string | number;
  borderBottom: string | number;
  border: string | number;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap};

  flex-direction: ${(props) => props.direction};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  gap: ${(props) => props.gap};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.background};
  overflow-y: ${(props) => props.overflowY};
  opacity: ${(props) => props.opacity};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border: ${(props) => props.border};
`;