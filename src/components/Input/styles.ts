import styled from "styled-components";

export const Input = styled.input`
  background-color: var(--darkBlack);
  width: 100%;
  outline: 0;
  transition: 0.5s background-color;

  &.notEmpty {
    background-color: white;
    color: var(--darkBlack);
  }

  + input {
    margin-top: 3rem;
  }
`;
