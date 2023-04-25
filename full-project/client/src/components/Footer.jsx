import React from 'react';
import { logoWhite, paymentLogo } from '../assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaHome} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn} from "react-icons/md";
import {BsPersonFill, BsPaypal} from "react-icons/bs";
import {LogoLight, PaymentLogo} from "../assets";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto px-8 grid grid-cols-4'>
            {/* =============== Start LogoIcone =============== */}
            <div className='flex flex-col gap-4'>
                <img className='w-32' src={logoWhite} alt="logoWhite" />
                <p className='text-white text-sm tracking-wide'>© zouhair.vercel.app</p>
                <img className='w-56 -mx-2' src={paymentLogo} alt="paymentLogo" />
                <div className='flex gap-5 text-lg text-gray-400'>
                    <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            {/* =============== End LogoIcone =============== */}

            {/* =============== Start Location Here =============== */}
            <div>
            <h2 className='text-2xl text-white mb-4 font-semibold'>Locate us</h2>
            <div className='text-base flex flex-col gap-2'>
              <p>Beni-Mellal, Morocco</p>
              <p>Mobile: +212 6 0435 9292</p>
              <p>Phone: +212 6 0435 9292</p>
              <p>E-mail: zouhairouddach11@gmail.com</p>
            </div>
            </div>
            {/* =============== End Location Here =============== */}

            {/* =============== Start Profile Here =============== */}
            <div className='m-auto'>
            <h2 className='text-2xl text-white mb-4 font-semibold'>Profile</h2>
            <div className='flex flex-col gap-2 text-base'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill /></span>My account</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal /></span>Checkout</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome /></span>Order Tracking</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn /></span>Help & Support</p>
            </div>
            </div>
            {/* =============== End Profile Here =============== */}

            {/* =============== Start SubscribeBtn =============== */}
            <div className='flex flex-col justify-center'>
              <input className='bg-transparent border px-4 py-2 text-sm' placeholder='Email' type="email" />
              <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
            </div>
            {/* =============== End SubscribeBtn =============== */}
        </div>
    </div>
  )
}

export default Footer