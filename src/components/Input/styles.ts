import styled from "styled-components";

type InputProps = {
  width?: string;
}

export const Input = styled.input<InputProps>`
  background-color: var(--darkBlack);
  width: ${props => props.width};
  outline: 0;
  transition: 0.5s background-color;

  &.notEmpty {
    background-color: white;
    color: var(--darkBlack);
  }
`;
