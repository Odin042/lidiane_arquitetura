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

  @media (min-width: 320px) and (max-width: 720px) {
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

  @media (min-width: 320px) and (max-width: 720px) {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 10%;
    top: 34%;
  }

  @media (min-width: 1440px) and (max-width: 2560px) {
    width: 500px;
    height: 100vh;
    top: 6%;
    left: 20%;
    }
`;


export const WrapperBanner = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 320px) and (max-width: 720px) {
    width: 150%;

    img {
      width: 400px;
      height: 100vh;
    }
  }

  @media (min-width: 1440px) and (max-width: 2560px) {
    width: 100%;

    img {
      width: 2560px;
      height: 100vh;
    }

  }

`;
