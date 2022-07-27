import styled from "styled-components";

export const SignUpBtn = styled.button`
  width: 100%;
  padding: 1rem 0;
  color: var(--white);
  font-weight: bolder;
  text-transform: uppercase;
  margin-top: 2rem;
  background: linear-gradient(transparent,rgba(0, 0, 0, 0.5)) top/100% 800%;
  background-color: var(--purple);
  transition:0.5s;

  &:hover {
    background-position:center;
  }

`;
