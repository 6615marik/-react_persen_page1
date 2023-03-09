import styled from '@emotion/styled';
export const List = styled.ul`
  width: 400px;
  padding: 10px;
  border: solid transparent 1px;
  border-radius: 10px;
  margin: 0 auto;
  background: rgb(134, 178, 220);
  list-style: none;
  &:hover {
    -webkit-box-shadow: 10px 5px 5px rgba(66, 16, 112, 0.4);
    box-shadow: 10px 5px 5px rgba(29, 7, 41, 0.4);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
