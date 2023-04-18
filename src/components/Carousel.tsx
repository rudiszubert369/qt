import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFetchData } from '../hooks/useFetchData';
import { API_URL } from '../constants';
import styles from './Carousel.module.scss';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Item {
  id: string;
  name: string;
  lead?: string;
  price: string;
  order?: number;
  isTop: boolean;
  img?: string;
}

const Carousel: React.FC = () => {
  const apiData: Item[] = useFetchData(API_URL);

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      breakpoints={{
        900: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {apiData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className={styles['slide-container']}>
            {item.img && <img src={item.img} alt={item.name} />}
            <h2>{`${item.id}. ${item.name}`}</h2>
            {item.lead && <p>{item.lead}</p>}
            <button className={styles.button}>Czytaj</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
