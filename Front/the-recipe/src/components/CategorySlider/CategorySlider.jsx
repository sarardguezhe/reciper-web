import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios.js";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";


export default function CategorySlider({ category }) {

  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    try {
      const { data } = await axiosInstance.get("/ingredients");
      const dataFiltered = data.filter((ingredient) => {
        return ingredient.category === category && ingredient;
      });
      setIngredients(dataFiltered);
    } catch (error) {
      console.error("Getting ingredients failed");
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div  style={{margin: 12}}>
      <div className="container px-5 pt-8 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              {category}
            </h1>
            <div className="flex mt-6 justify-center mb-16">
              <div className="w-16 h-1 rounded-full bg-violet-500 inline-flex"></div>
            </div>
          </div>
      </div>

      <div className="relative">

          <button className="custom-prev absolute left-24 top-1/2 -translate-y-1/4">
            <img src="/icons8-arrow-60-l.png" alt="flecha izquierda"/>
          </button>

          <button className="custom-next absolute right-24 top-1/2 -translate-y-1/2">
            <img src="/icons8-arrow-60-r.png" alt="flecha derecha"/>
          </button>

          <Swiper
            className="p-10 h-[370px] max-w-5xl mx-auto"
            grabCursor={true}
            rewind={true}
            slidesPerView={1}
            breakpoints={{
                768: { slidesPerView: 2 }, // Muestra 2 testimonios en pantallas medianas (md)
                1024: { slidesPerView: 3 }, // Muestra 3 testimonios en pantallas grandes (lg)
              }}
            spaceBetween={30}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
            modules={[Navigation]}
          >
            {ingredients?.map((ingredient) => (
              <SwiperSlide>
                <Link
                  to={`/ingredients/${ingredient._id}`}
                  className="object-contain shadow-xl"
                >
                  <div className="h-[360px] max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                      
                      {/* Imagen */}
                      <div className="w-full h-44 overflow-hidden">
                        <img
                          src={ingredient.image}
                          alt="Pimiento rojo"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Contenido */}
                      <div className="p-6 flex flex-col flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2 line-clamp-1">
                          {ingredient.name}
                        </h2>

                        <p className="text-gray-500 mb-6 line-clamp-2">
                          {ingredient.description}
                        </p>

                        <div className="mt-auto pt-4">
                        <button className="text-violet-600 font-medium tracking-wide hover:text-violet-800 transition">
                          DETALLES
                        </button>
                        </div>
                      </div>

                    </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

    </div>
  );
}
