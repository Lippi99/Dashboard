import styled from "styled-components";

export const SignInBtn = styled.button`
  width: 100%;
  display: inline-block;
  color:#fff;
  margin-top: 2rem;
  outline: 0;
  padding: 10px 20px;
  font-size: 20px;
  background: linear-gradient(transparent,rgba(0, 0, 0, 0.5)) top/100% 800%;
  background-color: var(--purple);
  transition:0.5s;

  &:hover {
    background-position:center;

  }
`;
