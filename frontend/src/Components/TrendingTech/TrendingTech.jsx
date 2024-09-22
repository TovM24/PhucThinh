import React from 'react'
import { Link } from 'react-router-dom';

// Import Lucide React
import { TrendingUp, ChevronRight, ChevronLeft  } from "lucide-react"

import TrendingTechItem from '../Item/Item' // Item form

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import swiper styles
import './Style.css'
// Import trending tech css
import './TrendingTech.css';

// Import required module
import { Navigation, Autoplay } from 'swiper/modules';

// Import data product
import data_product from '../Assets/trending';


// ý tưởng 
// trộn cái data xong trả về 1 cái mảng bao gồm 4 phần tử 

// Fisher-Yates trộn mảng
const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random number
        [arr[i], arr[j]] = [arr[j], arr[i]]; // shuffle
    }
    return arr;
}

// Return new array with nums elements randomly shuffled from arr 
// const getRandomItems = (arr, num) => {
//     const shuffle = shuffleArray(arr, num);
//     return shuffle.slice(0, num);
// }
// const getRandomItem = (arr) => {
//     const shuffle = shuffleArray(arr);
//     return shuffle[0];  // Lấy phần tử đầu tiên của mảng đã xáo trộn
// }

const TrendingTech = () => {
    return (
        <div className='trending'>
            <div className="trending-top">
                <h1>TRENDING TECH</h1>
                <hr/>
            </div>

            <div className="trending-bottom">
                {/* {getRandomItems(data_product, 4).map((item, i) => {
                    return <TrendingTechItem type="trendy" variant="itemm" key={i} id={item.id} name={item.name} subtitle={item.sub} image={item.image} current_price={item.current_price} previous_price={item.previous_price} color={item.color}/>
                })} */}
                <div className="trending-bottom__slider">
                    <div className="button-left">
                        <ChevronLeft size={20} />
                    </div>

                    <Swiper
                        slidesPerView={5}
                        spaceBetween={20}
                        loop={true}
                        // config button left & right
                        navigation={{ prevEl: '.button-left', nextEl: '.button-right' }}
                        // autoplay={{ delay: 3000 }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {/* render from slide data */}
                        {data_product.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <TrendingTechItem type="trendy" variant="itemm" id={slide.id} name={slide.name} image={slide.image} current_price={slide.current_price} previous_price={slide.previous_price} color={slide.color} discount={slide.discount}/>
                                {/* <h1 className='h1-demo-trending'>{slide.name}</h1> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="button-right">
                        <ChevronRight size={20} />
                    </div>
                </div>

                <div className="trending-bottom__navigation flex-between-center content-none">
                    <div className="trending-bottom__show-all flex-between-center">
                        <h1>Show All</h1>
                        <ChevronRight />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrendingTech;
