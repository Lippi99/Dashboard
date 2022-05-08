import styled from "styled-components";

export const Container = styled.form`
  max-width: 700px;
  height: 450px;
  width: 100%;
  overflow-y: auto;
  border-radius: 10px;
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
  justify-content: space-between;
  row-gap: 2rem;
  flex-wrap: wrap;
  padding: 1.5rem 4rem;

  .ant-picker-input > input {
    color: white;
    border: none;
  }
`;

export const GenreContainer = styled.div`
  width: 48%;
 > div:nth-child(1) > div:nth-child(1) {
   background-color: #121214;
   border: 1px solid #121214;
   color: white;

  }
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
    height: 48px;
    border-radius: 10px;
  }
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
