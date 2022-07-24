import styled from "styled-components";

interface SelectProps {
  backgroundColor: string;
  border: string;
  color: string;
}
// #121214

export const Container = styled.div<SelectProps>`
 > div:nth-child(1) > div:nth-child(1) {
   background-color: ${props => props.backgroundColor};
   border: ${props => props.border};
   color: black;

   > .ant-select-selection-placeholder {
    color: gray;
   }

  }
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
    margin-top: 7px;
    margin-bottom: 7px;
    border-radius: 10px;
    background-color: #121214;
  }



  .ant-select-selection-item {
    color: ${props => props.color};
  }
`;