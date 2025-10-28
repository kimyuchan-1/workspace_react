import TailButton from "../component/TailButton";
import { useRef, useEffect } from "react";

export default function Ref() {
    const txt1Ref = useRef();
    const txt2Ref = useRef();
    const txt3Ref = useRef();
    const optionRef = useRef();

    useEffect(() =>{
        txt1Ref.current.focus();
    },[])

    const handleClick = (e) => {
        e.preventDefault();

        let num1 = txt1Ref.current.value ?? "";
        let num2 = txt2Ref.current.value ?? "";
        let num3 = txt2Ref.current.value ?? "";
        let op = optionRef.current.value ?? "+";

        switch (op) {
            case "+" : num3 = Number(num1) + Number(num2); break;
            case "-" : num3 = Number(num1) - Number(num2); break;
            case "*" : num3 = Number(num1) * Number(num2); break;
            case "/" : Number(num2) == 0 ? num3 = "오류" : num3 = Number(num1) / Number(num2); break;
        }

        txt3Ref.current.value = num3;
    };

    const handleTxt1 = () => {
        txt1Ref.current.value = "";
        txt2Ref.current.value = "";
        txt3Ref.current.value = "";
    };

    return (
        <div className="w-full h-full 
                        flex flex-row justify-center items-center">
            <form className="w-full h-30 
                             flex justify-center items-center
                             bg-gray-300 rounded-sm">
                <input type="number" name="txt1" ref={txt1Ref} className="w-40 h-10 p-3 m-3 bg-white rounded-sm"
                       onFocus={handleTxt1}/>
                <select className="h-10 p-2 m-3 bg-white text-center rounded-sm" ref={optionRef}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="number" name="txt2" ref={txt2Ref} className="w-40 h-10 p-3 m-3 bg-white rounded-sm"/>
                <TailButton color = "blue" caption = "=" onHandle={handleClick}/>
                <input type="text" name="txt3" ref={txt3Ref} readOnly className="w-40 h-10 p-3 m-3 bg-white rounded-sm"/>
            </form>
        </div>
    )
}
