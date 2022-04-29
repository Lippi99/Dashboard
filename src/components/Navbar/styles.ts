import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background: var(--darkBlack);

  nav {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

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
