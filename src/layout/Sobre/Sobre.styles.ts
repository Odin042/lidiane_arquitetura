import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
`;

export const ContainerWho = styled.div`
  position: relative;
  width: 100%;
  height: 150vh;
  background-color: #660708;
  flex-direction: column;
`;

export const Avatar = styled.img`
  position: absolute;
  left: 650px;
  top: 70px;
  width: 422px;
  height: 420px;
  border-radius: 50%;
`;

export const Text = styled.div`
  display: flex;
  position: absolute;
  left: 450px;
  top: 520px;
  flex-direction: column;

  span {
    width: 60%;
  }
`;
