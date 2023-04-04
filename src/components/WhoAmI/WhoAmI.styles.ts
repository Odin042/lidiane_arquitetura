import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  /* display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px; */
`;

export const SwiperSlide = styled.div`
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
`;

export const Wrapper = styled.div`
  
`;

export const Avatar = styled.div`
  display: flex;
  margin: 0 100px 0 0;
  width: 400px;
  height: 400px;
  padding: 0 0 0 0;
  overflow: hidden;

  img {
    width: 400px;
    height: 500px;
    object-fit: cover;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 80px;
  margin-left: 180px;
  margin-top: 40px;
`;

export const WrapperInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  margin-bottom: 50px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    font-size: 16px;
    width: 80%;
  }
`;

export const Icon = styled.img`
  display: flex;
  width: 56px;
  height: 56px;

`;

export const Title = styled.div`

`;

export const Description = styled.div`

`;
