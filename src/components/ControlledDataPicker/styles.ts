import styled from 'styled-components';


export const Container = styled.div`

  > div > div > input {
    color: white;

    &::placeholder {
      color: gray;
    }
  }

`;

export const Error = styled.span`
  color: #dc1637;
  margin: 3px 0;
`;
