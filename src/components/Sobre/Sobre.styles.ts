import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
`;

export const ContainerWho = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #660708;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 720px) {
    width: 100%;
    height: 155vh;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 422px;
  height: 420px;
  border-radius: 50%;

  @media (min-width: 320px) and (max-width: 720px) {
    width: 250px;
    height: 240px;
    position: absolute;
    top: 150px;  
    
  }

  @media (min-width: 1440px) and (max-width: 2560px) {
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

  @media (min-width: 320px) and (max-width: 720px) {
    position: absolute;
    left: 50%;
    top: 60%;
    gap: 30px;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 2rem;
      font-family: 'Roboto', 'sans-serif';
    }

    span {
      font-size: 1.2rem;
      font-family: 'Roboto', 'sans-serif';
      width: 350px;
      
    }
  }

  @media (min-width: 1440px) and (max-width: 2560px) {
    position: absolute;
    height: 100%;
    left: 20%;
    margin-bottom: 16px;

    h1 {
      font-size: 4rem;
      font-family: 'Roboto', 'sans-serif';
      margin: 16px;
      top: 20%;
      }

    span {
      font-size: 1.5rem;
      font-family: 'Roboto', 'sans-serif';
      width: 90%;
      }
  }

`;
