import { useState } from "react"; // 생성된 컴포넌트를 업데이트하기 위해서는 hook을 사용
                                  // 변수 제어를 위해서는 useState hook 사용

export default function MyListCard({title,imgurl,content}) {
    // useState 선언
    const [scnt, setScnt] = useState(0); // 상태변수와 변수를 업데이트하는 메소드
    const [dcnt, setDcnt] = useState(0);

    let cnt = 0;
    const handleClick = () => {
        cnt++;
        setScnt(scnt + 1);
        console.log(`${title} like click : ${scnt+1}`);
    }
    const handleClick2 = () => {
        cnt++;
        setDcnt(dcnt + 1);
        console.log(`${title} dislike click : ${dcnt+1}`);
    }

    return (
        <div className="max-w-130 max-h-55 
                        border-1 border-gray-300 rounded-md
                        flex flex-col justify-center items-center">
            <div className="flex flex-row justify-start items-center">
                <div className="w-1/3 flex justify-center p-2 ">
                    <img src = {imgurl} alt = {title} className="rounded-md"/>
                </div>
                <div className="w-2/3">
                    <h1 className="text-2xl font-bold m-2">{title}</h1>
                    <p className="m-2 wrap-anywhere text-gray-600">{content}</p>
                </div>
            </div>
            <div className="w-full flex justify-between">
                <div className="w-full px-5 py-1
                                flex flex-row justify-end items-end
                                cursor-pointer hover:text-red-600
                                select-none"
                    onClick={handleClick}>
                💖 좋아요 {scnt}
                </div>
                <div className="w-full px-5 py-1
                                flex flex-row justify-end items-end
                                cursor-pointer hover:text-blue-600
                                select-none"
                    onClick={handleClick2}>
                💔 싫어요 {dcnt}
                </div>
            </div>
        </div>
    )
}
