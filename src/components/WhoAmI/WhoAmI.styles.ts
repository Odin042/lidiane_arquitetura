import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoIcon = styled.img`
  position: absolute;
  top: 12%;
  left: 40%;
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  top: 4%;
  right: 30%;
  width: 25%;
  height: 80%;

  h1 {
   position: absolute;
   text-align: center;
   top: 30%
  }

  span {
    position: absolute;
    width: 80%;
    top: 40%;
    left: 8%;
    word-break: break-all;
    text-align: center;
  }
`;
