import React, { useState } from 'react'
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";

const Banner = () => {

const [currentSlide, setCurrentSlide] = useState(0)

const data = [
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img4.8f7fc6b56e74dba2b6f9.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
]

const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev)=>prev-1)
};
const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev)=>prev+1)
};

  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen-h-[650px] relative'>
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className=' transition-transform duration-1000 w-[400vh] flex h-full'>
                <img className='w-screen h-full object-cover' src={data[0]} alt="imgOne" loading='priority' />
                <img className='w-screen h-full object-cover' src={data[1]} alt="imgTwo" loading='priority' />
                <img className='w-screen h-full object-cover' src={data[2]} alt="imgThree" loading='priority' />
                <img className='w-screen h-full object-cover' src={data[3]} alt="imgFour" loading='priority' />
            </div>
            <div className="w-fit left-0 absolute right-0 flex mx-auto gap-8 bottom-44">
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:text-white active:bg-gray-900 duration-300 hover:bg-gray-700'><HiArrowLeft /></div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:text-white active:bg-gray-900 duration-300 hover:bg-gray-700'><HiArrowRight /></div>
            </div>
        </div>
    </div>
  )
}

export default Banner