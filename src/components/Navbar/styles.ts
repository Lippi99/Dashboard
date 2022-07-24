import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background: var(--darkBlack);

  nav {
    margin: 0 auto;
    width: 100%;

    ul {
      width: 100%;
      display: flex;
     

      > a {
        color: var(--white);
        font-size: 1rem;
        + a {
          margin-left: 3rem;
        }
      }
    }
  }
`;
