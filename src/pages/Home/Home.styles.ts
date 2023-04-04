import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  
`;

export const WrapperHome = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  justify-content: center;
  align-items: center; 
  height: 50%;
  background-image: url('/images/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  img{
    width: 550px;
    height: 520px;
  }

  h1 {
    display: relative;
    top: 56px;
  }
`;

export const TitleInfo = styled.div`
  display: flex;
  gap: 32px;
  left: -50px;
  flex-direction: row;

  h1 {
    font-size: 48px;
  }

`;