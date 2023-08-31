import React from 'react'
import './find.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from './Card';

function CarFind() {
  return (
    <div className='find'>
    <div className="heading">
        <h1>Find  Driver</h1>
        <div className='text-bg'>
            <p>
                <span>Explore the World's largest car sharing Marketplaces</span>
            </p>
        </div>
    </div>
    <div className="slider-container">
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    breakpoints={{
        340:{
            width : 200,
            slidesPerView:1,
        },
        768:{
            width : 768,
            slidesPerView:4,
        },
        1040:{
            width : 1040,
            slidesPerView: 5,
        },

    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
            image ="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            make ="BMw"
            />
        </SwiperSlide>

    </Swiper>
        

    </div>

</div>
  )
}

export default CarFind
