import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const GithubRedirect = styled.span`
  color: var(--white);
  font-size: 1rem;
  width: 30%;
`;

export const GithubButton = styled.button`
  text-transform: uppercase;
  color: var(--white);
  font-weight: bolder;
  width: 70%;
  padding: 1rem 0;
  background-color: var(--lighterBlack);
  border: 1px solid var(--lighterBlack);
  border-radius: 10px;
`;
