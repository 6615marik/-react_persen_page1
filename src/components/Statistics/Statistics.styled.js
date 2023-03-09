import styled from '@emotion/styled';
export const Statisticss = styled.section`
  background-color: azure;
  border-radius: 10px;
  display: block;
  margin: 40px auto;
  width: 700px;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;

  &:hover {
    -webkit-box-shadow: 10px 5px 5px rgba(100, 67, 172, 0.4);
    box-shadow: 10px 5px 5px rgba(23, 6, 39, 0.4);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: rgb(0, 0, 9);
  text-align: center;
  padding-top: 20px;
`;

export const Statlist = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  margin: 20px 0px;
  padding-bottom: 10px;
  padding-left: 0px;
  background: rgb(134, 178, 220);
  padding: 20px;
`;

export const Statli = styled.li`
  display: flex;
  height: 80px;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 5px;
  font-size: 18px;
  align-items: center;
  width: 122px;
  font-weight: 600;
  border-radius: 10px;
  -webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const Label = styled.span`
  color: whitesmoke;
  text-shadow: 0 0 3px #000, 0 0 5px #fff;
  margin: 10px auto;
`;

export const Percentage = styled.span`
  margin-bottom: 20px;
  color: rgb(16, 5, 40);
  text-shadow: 0 0 3px #fff, 0 0 5px #000;
  margin-bottom: 10px;
`;
