import styled from '@emotion/styled';
export const Profilee = styled.div`
  width: 350px;
  margin: auto;
  display: block;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  &:hover {
    -webkit-box-shadow: 10px 5px 5px rgba(42, 54, 108, 0.4);
    box-shadow: 10px 5px 5px rgba(42, 37, 130, 0.4);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const Description = styled.div`
  margin-top: 40px;
  padding: 10px;
  background-color: azure;
  text-align: center;
  font-size: 16px;

  color: rgb(135, 133, 131);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Avatar = styled.img`
  margin-top: 20px;
  width: 180px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: rgb(0, 0, 9);
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;

  background: rgb(134, 178, 220);
  margin: 0;
  padding: 20px 45px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Statli = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgb(88, 88, 94);
`;

export const Quantity = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
