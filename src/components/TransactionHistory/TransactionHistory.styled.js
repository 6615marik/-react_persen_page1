import styled from '@emotion/styled';
export const TransactionHistoryy = styled.table`
  width: 700px;
  margin: 50px auto;
  border: 4px solid rgb(134, 178, 220);
  border-radius: 10px;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;

  &:hover {
    -webkit-box-shadow: 10px 5px 5px rgba(35, 10, 70, 0.4);
    box-shadow: 10px 5px 5px rgba(39, 20, 110, 0.4);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const Thead = styled.thead`
  text-align: center;
  background: rgb(134, 178, 220);
  height: 40px;
  color: azure;
`;

export const TheadTr = styled.tr`
  text-transform: uppercase;
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const TbodyTr = styled.tr`
  height: 30px;
  &:hover {
    background-color: rgba(31, 128, 208, 0.8);
  }
  &:nth-child(odd) {
    background-color: rgba(99, 102, 122, 0.2);
    &:hover {
      background-color: yellow;
    }
  }
`;
