import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex-direction: column;

  }
`;

export const ContainerWho = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #660708;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex-direction: column;

  }


`;

export const Avatar = styled.img`
  position: absolute;
  left: 650px;
  top: 70px;
  width: 422px;
  height: 420px;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 2560px) {
    width: 422px;
    height: 420px;
    left: 40%;
    top: 20%;
  
    transform: translate(-20%, -20%);
    }
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

  @media screen and (max-width: 600px) {
    width: 100%;
    position: absolute;
    height: 100%;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 1.5rem;
      font-family: 'Roboto', 'sans-serif';
      margin: 16px;
    }

    span {
      font-size: 0.9rem;
      font-family: 'Roboto', 'sans-serif';
      width: 90%;
      margin: 16px;
    }
  }

  @media screen and (max-width: 2560px) {
    position: absolute;
    height: 100%;
    left: 20%;
    margin-bottom: 16px;

    h1 {
      font-size: 2.5rem;
      font-family: 'Roboto', 'sans-serif';
      margin: 16px;
      top: 20%;
      }

    span {
      font-size: 1.5rem;
      font-family: 'Roboto', 'sans-serif';
      width: 90%;
      margin: 16px;
      }
  }

`;
