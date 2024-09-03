import React from 'react';
import { Link } from 'react-router-dom';

// Import Lucide React
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper auto play slides
import 'swiper/css/autoplay';

// Import Slider style
import './Style.css'; // css swiper style
import './Slider.css';

// Import required module
import { Navigation, Autoplay } from 'swiper/modules';

// Slide data
const slideData = [
    {
        title: "gaming0",
        subtitle: "enjoy next level of",
        description: "Tension-Proof And Durabilty Of Strang And Toughness Aloy Head Boom",
    },
    {
        title: "gaming1",
        subtitle: "enjoy next level of",
        description: "Tension-Proof And Durabilty Of Strang And Toughness Aloy Head Boom",
    },
    {
        title: "gaming2",
        subtitle: "enjoy next level of",
        description: "Tension-Proof And Durabilty Of Strang And Toughness Aloy Head Boom",
    }
];

const Slider = () => {
    return (
        <>
            <div className="container">
                <div className="button-left">
                    <ChevronLeft size={20} />
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    // config button left & right
                    navigation={{ prevEl: '.button-left', nextEl: '.button-right' }}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {/* render from slide data */}
                    {slideData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-content">
                                <h3>{slide.subtitle}</h3>
                                <h1>{slide.title}</h1>
                                <div className="slide-description">
                                    <p>{slide.description}</p>
                                </div>
                                <div className="slide-navigation">
                                    <Link style={{ textDecoration: 'none' }} to='/login'>
                                        <button style={{ background: '#8262d2' }}>
                                            button 1
                                            <ArrowRight style={{ width: '22px', height: '22px', lineHeight: '30px', marginLeft: '10px' }} />
                                        </button>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} to='/login'>
                                        <button className="button-none-active" style={{ background: 'transparent' }}>
                                            button 2
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="button-right">
                    <ChevronRight size={20} />
                </div>
            </div>
        </>
    );
};

export default Slider;