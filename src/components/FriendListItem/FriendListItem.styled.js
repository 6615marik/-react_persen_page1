import styled from '@emotion/styled';
export const Iteam = styled.li`
  background-color: azure;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 300px;
  border: solid 1px rgba(163, 159, 159, 0.6);
  border-radius: 5px;
  margin: 20px auto;
  padding: 10px;
  -webkit-box-shadow: 2px 2px 10px rgba(29, 18, 59, 0.4);
  box-shadow: 2px 2px 10px rgba(49, 31, 108, 0.4);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const Img = styled.img`
  width: 40px;
  border: solid 1px rgba(128, 128, 128, 0.4);
  -webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
`;
export const StatysOn = styled.span`
  border-radius: 50%;
  background-color: rgb(46, 158, 32);
  border: 2px solid rgba(13, 106, 13, 0.6);
  width: 10px;
  height: 10px;
  text-align: center;
  position: relative;
  -webkit-animation: anim-glow-green 2s ease infinite;
  animation: anim-glow-green 2s ease infinite;
  margin: 0 20px 0 10px;
`;
export const StatysOff = styled.span`
  border-radius: 50%;
  background-color: rgb(175, 41, 41);
  border: 2px solid rgba(255, 0, 0, 0.6);
  width: 10px;
  height: 10px;
  text-align: center;
  position: relative;
  -webkit-animation: anim-glow-red 2s ease infinite;
  animation: anim-glow-red 2s ease infinite;
  margin: 0 20px 0 10px;
`;
export const Name = styled.p`
  font-weight: 600;
  margin-left: 22px;
`;
