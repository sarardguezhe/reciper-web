
// Importa los componentes Swiper de React
import { Swiper, SwiperSlide } from 'swiper/react';

// Importa los estilos para el slider Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa módulos requeridos
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


export default function App() {
  const videoStyle = {
    width: "100%",
    maxHeight: "600px",
    objectFit: "cover",
  };

  const swiperContainerStyle = {
    width: "100%",
    margin: "0 auto",
    clipPath: "ellipse(120% 60% at 50% 40%)",
    WebkitClipPath: "ellipse(120% 60% at 50% 40%)",
    overflow: "hidden",
  };

  return (
    <div style={swiperContainerStyle}>
      <Swiper
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <video autoPlay muted loop style={videoStyle}>
            <source
              src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791075/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_8_igxllh.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay muted loop style={videoStyle}>
            <source
              src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791075/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_7_clwjri.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay muted loop style={videoStyle}>
            <source
              src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791074/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_6_fbzmhp.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        {/* Se pueden agregar más diapositivas de video según sea necesario */}
      </Swiper>
    </div>
  );
}








