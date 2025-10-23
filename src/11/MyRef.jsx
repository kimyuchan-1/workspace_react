import { useState, useEffect, useRef } from "react"

export default function MyRef() {
    let cnt = 0;
    const [scnt, setScnt] = useState(0);
    const rcnt = useRef(0);

    const handleCnt = () => {
        cnt = cnt + 1;
        console.log("cnt = "+cnt);
    };

    const handleScnt = () => {
        setScnt(prev => prev+1);
        console.log("scnt = "+scnt);
    };

    const handleRcnt = () => {
        rcnt.current = rcnt.current + 1;
        console.log("rcnt = "+rcnt.current);
    };
    // 화면이 state에 의해 변경될 화면에서 ref 변수가 변함


    return (
        <div className="w-full h-full
                        text-xl font-bold
                        flex justify-center items-center
                        space-x-10">
            <div className="text-blue-700">
                <div className="bg-blue-700 text-white p-2 cursor-pointer" onClick={handleCnt}>일반 컴포넌트 변수</div>
                <div className="text-center p-2">{cnt}</div>
            </div>
            <div className="text-lime-700">
                <div className="bg-lime-700 text-white p-2 cursor-pointer" onClick={handleScnt}>state 변수</div>
                <div className="text-center p-2">{scnt}</div>
            </div>
            <div className="text-orange-700">
                <div className="bg-orange-700 text-white p-2 cursor-pointer" onClick={handleRcnt}>ref 변수</div>
                <div className="text-center p-2">{rcnt.current}</div>
            </div>
        </div >
    )
}
