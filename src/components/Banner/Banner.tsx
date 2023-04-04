import * as Styles from "./Banner.styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
  return (
    <Styles.Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src="/images/image_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image_4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/image_5.jpg" />
        </SwiperSlide>
      </Swiper>
    </Styles.Container>
  );
};


export default Banner;
