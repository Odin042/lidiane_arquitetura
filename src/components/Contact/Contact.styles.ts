import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;

`;

export const Logo = styled.img `
  width: 60px;
  height: 60px;
  margin: 32px;
`;

export const Heading = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  background-color: #f9c7c8;

  span {
    margin-left: 30px;
  }
`;

export const Infos = styled.div `
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  gap: 95px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
`;

export const Title = styled.div`
  display: flex;
  font-family: 'Roboto', 'sans-serif';
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 16px;
`;

export const Description = styled.span`
  display: flex;
  font-family: 'Roboto', 'sans-serif';
  font-size: 1rem;
`;

export const QrCode = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 40px;
`;
