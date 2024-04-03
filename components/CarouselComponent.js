import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS del carousel

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {DATA.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={`Slide ${item.id}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
