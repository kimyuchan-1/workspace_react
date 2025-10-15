import TailButton from "../component/TailButton";
import { useState } from "react";

const BGStyle = {
        blue : {
            on : "bg-blue-200",
            off : "bg-blue-100"
        },
        orange : {
            on : "bg-orange-200",
            off : "bg-orange-100"
        },
        lime : {
            on : "bg-lime-200",
            off : "bg-lime-100"
        }
    };

export default function MyToggleBox({color,caption}) {
    const bgst = BGStyle[color];
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(prev => !prev);
    };
    
    return (
        <div className={`w-full h-40 ${isActive ? bgst.on : bgst.off} rounded-md
                        flex items-center justify-center flex-col`}>
            <h1 className="text-xl font-bold mb-3">
                {caption} 토글 박스
            </h1>
            <p className={`text-xs ${isActive ? 'text-red-500' : 'text-gray-500'} mb-3`}>
                현재 상태 : {isActive ? 'on' : 'off'}
            </p>
            <TailButton color = {color} caption = {caption} onHandle={handleClick}/>
        </div>
    )
}