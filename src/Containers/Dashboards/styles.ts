import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  background-color: var(--darkBlack);
`;

export const InnerContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 28.5rem));
  justify-content: flex-start ;
  margin: 0 auto;
`;

export const GridItem = styled.div`
  width: 100%;

`
