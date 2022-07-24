import styled from 'styled-components';

interface ContentProps {
  width: string | number;
  background: string;
  minHeight: string | number;
  overflowY: string | number;
  opacity: string | number;
  position: string | number;
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
  padding: string | number;
  margin: string | number;
  borderbottom: string | number;
  border: string | number;
  borderRadius: string;
  zIndex: 1 | 100 | 1000;
  transform: string;
}

export const Content = styled.div<ContentProps>`
  width: ${(props) => props.width};
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
  border-bottom: ${(props) => props.borderbottom};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  z-index: ${(props) => props.zIndex};
  transform: ${(props) => props.transform};
`;