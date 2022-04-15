import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const DivideSection = styled.hr`
  width: 45%;
  height: 1px;
  border: 0.5px solid var(--grayLight);
  opacity: 0.3;
`;
