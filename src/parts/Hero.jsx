import { Carousel } from 'flowbite-react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import image1 from '../assets/images/home-machine-1.png'
import image2 from '../assets/images/home-machine-2.png'
import image3 from '../assets/images/home-machine-3.png'
import Button from '../elements/button'

const Hero = () => {
    return (
        <Fade bottom>
            <div className='hero'>

                <Carousel className='' leftControl="  " rightControl="  ">
                    <div className="flex h-full justify-center">
                        <div className='w-50 flex flex-row'>
                            <div>
                                <h1 className="text-3xl  sm:text-6xl text-theme-blue font-bold ">
                                    UV Curing Machines
                                    {' '}
                                    <br />
                                     for Screen Printing
                                </h1>
                                <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
                                    We provide UV Machines using latest technologies
                                    to help you scale up your business.
                                </p>
                                <Button href="/project" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200">
                                    See products
                                    <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Button>
                            </div>
                        </div>

                        <div>
                            <img src={image1} alt="" />
                        </div>
                    </div>

                    <div className="flex h-full justify-center">
                        <div className='w-50 flex flex-row'>
                            <div>
                                <h1 className="text-3xl sm:text-6xl text-theme-blue font-bold ">
                                    Roller Coater for
                                    {' '}
                                    <br />
                                    Water Based Coating
                                </h1>
                                <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
                                We provide UV Machines using latest technologies
                                    to help you scale up your business.
                                </p>
                                <Button href="/project" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200">
                                    See products
                                    <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                    </div>




                    <div className="flex h-full justify-center">
                        <div className='w-70 flex flex-row'>
                            <div>
                                <h1 className="text-3xl sm:text-6xl text-theme-blue font-bold ">
                                    Inter-Deck 
                                    {' '}
                                    <br />
                                    UV Curing System
                                </h1>
                                <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
                                We provide UV Machines using latest technologies
                                    to help you scale up your business.
                                </p>
                                <Button href="/project" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200">
                                    See products
                                    <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className='w-50'>
                            <img src={image3} alt="" className='hero-image' />
                        </div>
                    </div>

                </Carousel>
            </div>
        </Fade>
    )
}

export default Hero