import React from 'react'
import Slider from "react-slick";
import { Fade } from 'react-awesome-reveal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../assets/images/sp01.jpg'



const Services = ({ data }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto pt-20 pb-28">
                <Fade bottom>
                    <h1 className="text-5xl text-theme-blue text-center font-bold">Our Service</h1>

                    <p className="font-light text-lg text-gray-400 text-center mb-12">
                        We are ready to scale up your business with our great service.
                    </p>
                </Fade>

                <Slider className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16" {...settings}>{
                    data.map((item, index) => (
                        <Fade bottom delay={500 * index}>
                            <div className='m-3 shadow-xl'> 
                                <div className="bg-white group rounded-2xl  border border-light-theme-purple transform transition duration-500 hover:scale-105">
                                    <img src={item.imageUrl} alt="Service" className="w-full rounded-t-2xl" />
                                    <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">{item.title}</h2>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </Slider>

            </div>

        </div>

    );
}

export default Services