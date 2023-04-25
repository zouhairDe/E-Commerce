import React from "react";
import {cartImg, logoDark} from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const userInfo = useSelector((state) => state.bazar.userInfo);
    console.log(userInfo);
    return(
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
            <div className="h-full px-8 max-w-screen-xl mx-auto flex items-center justify-between">
                <Link to="/">
                    <div>
                        <img className="w-28 pl-3" src={logoDark} alt="logoDark" />
                    </div>
                </Link>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 decoration-[1px]">Home</li>
                        <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 decoration-[1px]">Shop</li>
                        <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 decoration-[1px]">Pages</li>
                        <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 decoration-[1px]">Elements</li>
                        <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 decoration-[1px]">Blog</li>
                    </ul>
                    <Link to="/cart">
                        <div className="relative">
                            <img className="w-14" src={cartImg} alt="cartImg" />
                            <span className="absolute w-6 top-6 left-4 text-sm flex items-center justify-center font-semibold font-titleFont">{productData.length}</span>
                        </div>
                    </Link>
                    <Link to="/login">
                    <img className="w-8 h-8 rounded-full" src={
                        userInfo ? userInfo.image : "https://i.pinimg.com/originals/e1/03/19/e10319f214e5b562653051223d9f296c.png"
                    } alt="userLogo" />
                    </Link>
                    {
                        userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header