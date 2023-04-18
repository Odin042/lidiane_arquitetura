import * as Styles from "./Banner.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const mockImages = [
  {
    id: 1,
    logo: "/images/logonova.png",
    image:"/images/image_1.jpg",
  },
  {
    id: 2,
    logo: "/images/logonova.png",
    image:"/images/image_2.jpg",
  },
  {
    id: 3,
    logo: "/images/logonova.png",
    image:"/images/image_3.jpg",
  },
  {
    id: 4,
    logo: "/images/logonova.png",
    image:"/images/image_4.jpg",
  },
  {
    id: 5,
    logo: "/images/logonova.png",
    image:"/images/image_5.jpg",
  },
];

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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {mockImages.map((index) => (
        <SwiperSlide key={index.id}>
        <Styles.WrapperBanner>
           <Styles.Logo>
              <img src={index.logo} />
            </Styles.Logo>
            <img src={index.image} />
          </Styles.WrapperBanner>
        </SwiperSlide>
        ))}
      </Swiper>
    </Styles.Container>
  );
};

export default Banner;
