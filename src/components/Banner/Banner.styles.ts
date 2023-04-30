import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;


`;

export const SwiperSlide = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 2560px) {
    width: 100rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    width: 500px;
    max-width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 95vh;
    margin-left: 30px;

    img{
      width: 200px;
      height: 150px;
    }
  }

  @media screen and (max-width: 2560px) {
    width: 500px;
    height: 100vh;
    top: 6%;
    left: 20%;
    }
`;


export const WrapperBanner = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 150%;

    img {
      width: 400px;
      height: 90vh;
    }
  }

  @media screen and (max-width: 2560px) {
    width: 100%;

    img {
      width: 2560px;
      height: 100vh;
    }

  }

`;
