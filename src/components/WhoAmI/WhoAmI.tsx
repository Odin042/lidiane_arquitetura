import React, { useRef, useState } from "react";

import Description from "../Typography/Description";
import Heading from "../Typography/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel , Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import * as Styles from "./WhoAmI.styles";

const mockInfos = [
  {
    title: "Arquitetura Residencial",
    icon: "/icons/casa-limpa.png",
    image:"/images/image_1.jpg",
    description:
      "Arquitetura é a arte e ciência de projetar e construir edifícios e outras estruturas físicas. Eu amo mostrar as diferentes especializações que existem na área, como arquitetura residencial, comercial, institucional, paisagismo, urbanismo, restauração e conservação de patrimônio histórico.",
  },
  {
    title: "Arquitetura Comercial",
    icon: "/icons/armazenar.png",
    image:"/images/image_2.jpg",
    description:
      "Urbanismo é a ciência que estuda o planejamento, a gestão e o desenvolvimento das cidades, buscando torná-las mais sustentáveis, acessíveis e agradáveis para seus habitantes. Eu adoro mostrar como a arquitetura e o design podem impactar diretamente na qualidade de vida das pessoas que vivem nas cidades.",
  },
  {
    title: "Ambientação",
    icon: "/icons/parque.png",
    image:"/images/image_3.jpg",
    description:
      "Na arquitetura, a inovação pode ser aplicada de várias formas, desde o uso de materiais sustentáveis até o desenvolvimento de novos modelos de construção que atendam às demandas da sociedade moderna. A inovação também pode ser utilizada para transformar espaços urbanos, trazendo soluções inteligentes para problemas de mobilidade, acessibilidade e segurança.",
  },
];

const WhoAmI = () => {
  return (
    <Styles.Container>
      <Styles.SwiperContainer
         direction={"vertical"}
         slidesPerView={1}
         spaceBetween={30}
         mousewheel={true}
         pagination={{
           clickable: true,
         }}
         modules={[Mousewheel, Pagination]}
         className="mySwiper"
      >
        {mockInfos.map((info) => (
          <SwiperSlide key={info.title}>
            <Styles.InfoContainer>
              <Styles.SlideImage src={info.image} />
              <Styles.WrapperContainer>
                <Styles.InfoIcon src={info.icon} alt={info.title} />
                <Heading  size="Large" label={info.title} />
                <Description  label={info.description} />
              </Styles.WrapperContainer>
            </Styles.InfoContainer>
          </SwiperSlide>
        ))}     
      </Styles.SwiperContainer>
    </Styles.Container>

    // <Styles.Container>
    //   <Styles.Avatar>
    //     <img src="/images/avatar-arquitetura.jpg" alt="logo" />
    //   </Styles.Avatar>
    //   <Styles.ContainerInfo>
    //     {mockInfos.map((item, index) => (
    //       <Styles.WrapperInfos key={index}>
    //         <Styles.Infos>
    //           <Styles.Icon src={item.icon} alt={"icone de arquitetura"} />
    //           <Heading label={item.title} size="Small" />
    //           <Description label={item.description} />
    //         </Styles.Infos>
    //       </Styles.WrapperInfos>
    //     ))}
    //   </Styles.ContainerInfo>
    // </Styles.Container>
  );
};

export default WhoAmI;
