import Description from "../Typography/Description";
import Heading from "../Typography/Heading";
import * as Styles from "./WhoAmI.styles";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const mockInfos = [
  {
    title: "Arquitetura Residencial",
    icon: "/icons/construcao-de-arquitetura-economica-de-conteineres-empilhados.png",
    description:
      "Arquitetura é a arte e ciência de projetar e construir edifícios e outras estruturas físicas. Eu amo mostrar as diferentes especializações que existem na área, como arquitetura residencial, comercial, institucional, paisagismo, urbanismo, restauração e conservação de patrimônio histórico.",
  },
  {
    title: "Arquitetura Comercial",
    icon: "/icons/paisagem-urbana.png",
    description:
      "Urbanismo é a ciência que estuda o planejamento, a gestão e o desenvolvimento das cidades, buscando torná-las mais sustentáveis, acessíveis e agradáveis para seus habitantes. Eu adoro mostrar como a arquitetura e o design podem impactar diretamente na qualidade de vida das pessoas que vivem nas cidades.",
  },
  {
    title: "Inovação",
    icon: "/icons/foguete.png",
    description:
      "Na arquitetura, a inovação pode ser aplicada de várias formas, desde o uso de materiais sustentáveis até o desenvolvimento de novos modelos de construção que atendam às demandas da sociedade moderna. A inovação também pode ser utilizada para transformar espaços urbanos, trazendo soluções inteligentes para problemas de mobilidade, acessibilidade e segurança.",
  },
];

const WhoAmI = () => {
  return (
     <Styles.Container>
      <Styles.Wrapper>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"

          data-swiper-parallax="-23%"
        ></div>
        <Styles.SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </Styles.SwiperSlide>
        <Styles.SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </Styles.SwiperSlide>
        <Styles.SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </Styles.SwiperSlide>
      </Swiper>
      </Styles.Wrapper>
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
