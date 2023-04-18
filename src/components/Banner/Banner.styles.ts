import styled from 'styled-components';

export const Container = styled.div`
  height: 93vh;
  width: 100%;
  overflow: hidden;
  min-width: 2560px;

  @media (max-width: 2560px) {
    width: 100vw;
  }
`;

export const SwiperSlide = styled.img`
  width: 50%;
  height: 100%;
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
`;

export const WrapperBanner = styled.div`
  display: flex;
  width: 100%;
`;
