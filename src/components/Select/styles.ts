import styled from "styled-components";

export const Container = styled.div`
 > div:nth-child(1) > div:nth-child(1) {
   background-color: #121214;
   border: 1px solid #121214;
   color: white;

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
    color: white;
  }
`;