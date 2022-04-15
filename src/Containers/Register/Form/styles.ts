import styled from "styled-components";

export const Container = styled.form`
  max-width: 500px;
  width: 100%;
  background-color: var(--lightBlack);
  margin: 0 auto;
  padding: 1rem 0;

  > span {
    color: var(--white);
    font-weight: bolder;
    font-size: 1.3rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 4rem;
`;

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 4rem;

  span {
    color: white;
    a {
      color: var(--purple);
      text-decoration: none;
    }
  }
`;
