import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerWho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background-color: #660708;
  flex-direction: row;

`;

export const Avatar = styled.img`
  display: flex;
  margin: 60px 60px 60px 170px;
  width: 500px;
  height: 500px;
  border-radius: 20%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;


  span {
    width: 70%;
  }
`;
