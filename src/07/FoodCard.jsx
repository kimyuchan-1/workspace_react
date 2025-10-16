import React from 'react'
import busan from '../assets/busan.png'
import bank from '../assets/bank.png'
import market from '../assets/market.png'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFax } from "react-icons/md";
import { useState } from 'react';

const textColor = {
    on : "text-white",
    off : "text-gray-700"
}

export default function FoodCard({name, operator, address, img, phone, fax}) {
    const[isActive, setIsActive] = useState(false);

    const HandleClick = () => {
        setIsActive(prev => !prev);
    };

    const txtC = isActive ? textColor.on : textColor.off;

    return (
        <div className='w-19/20 h-19/20 m-2
                        flex flex-col flex-wrap
                        justify-between
                        border-solid border-gray-200 border-2
                        rounded-sm'>
            <div className='w-full p-2 flex flex-row justify-start items-center'>
                <img src={img == "광역지원센터" ? busan : (img == "기초푸드뱅크" ? bank : market)}
                     className='w-31 h-31 p-1'/>
                <div>
                    <h1 className='p-1
                                    text-2xl font-bold'>
                        {name}
                    </h1>
                    <h2 className='p-1
                                    text-xl font-bold'>
                        {operator}
                    </h2>
                    <div className='p-1
                                    text-gray-500'>
                        {address}
                    </div>
                </div>
            </div>
            <div className={`w-full p-2
                            flex flex-row justify-end items-center
                            ${txtC} bg-gray-700 select-none`}
                 onClick={HandleClick}>
                <FaPhoneAlt /> &nbsp;{phone}&nbsp;&nbsp;<MdOutlineFax />&nbsp;{fax}
            </div>
        </div>
    )
}
