import styled from "styled-components";

interface CardProps {
  width: string;
  height: string;
  padding?: string;
}

export const Container = styled.div<CardProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background: var(--lightBlack);
  margin: 2rem auto;

  h1{
    font-size: 1.2rem;
    font-weight: 400;
    color: #aaa;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 1.7rem;
    color: black;
    margin-bottom: 1rem;
    color: var(--white);
    font-family: 'Poppins', sans-serif;
  }

`