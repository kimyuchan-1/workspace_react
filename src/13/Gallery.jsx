import TailCard from '../component/TailCard'
import TailButton from '../component/TailButton'
import {useRef, useEffect, useState} from 'react'

export default function Gallery() {
    
    const [gData, setGData] = useState([]);
    const [cardTags, setCardTags] = useState([]);

    const txt1Ref = useRef();

    const getFetchData = async (search) => {
        const apiKey = import.meta.env.VITE_APP_API_KEY; 
        const baseUrl = '/photo-api/gallerySearchList1?';
        let url = `${baseUrl}serviceKey=${apiKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${search}&_type=json`;

        try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        const galleryData = await data.response.body.items.item;
        console.log(galleryData);
        setGData(galleryData);
        } catch (error) {
            console.log("에러 발생",error);
        }

    };

    const handleClick = (e) => {
        e.preventDefault();

        let txtWord = txt1Ref.current.value ?? "";
        let search = encodeURI(txtWord);

        getFetchData(search);
    };

    const handleClick2 = (e) => {
        e.preventDefault();

        txt1Ref.current.value = "";
        setCardTags([]);
    };

    useEffect(()=>{
        txt1Ref.current.focus();
    },[]);

    useEffect(()=>{
        const tempTags = gData.map(item => <TailCard title = {item.galTitle} 
                                                     url = {item.galWebImageUrl} 
                                                     location = {item.galPhotographyLocation} 
                                                     keyword = {item.galSearchKeyword}
                                                     keyVal = {item.galContentId}
                                                     key = {item.galContentId}/>);
        setCardTags(tempTags);
    },[gData]);

    return (
        <div className='w-full h-full flex flex-col justify-start items-center p-3'>
            <div className='w-9/10 h-40 shadow-lg outline outline-black/5
                            flex flex-col justify-center items-center
                            rounded-sm p-2 m-3'>
                <h1 className='text-4xl font-bold'>한국관광공사_관광사진 정보</h1>
                <form className='flex flex-row justify-center items-center m-3'>
                    <input type='text' className='w-50 h-10 mr-2 p-2
                                                  border-solid border-1 border-gray-400
                                                  rounded-sm '
                           name='txt1' ref={txt1Ref}/>
                    <TailButton color ="blue" caption="확인" onHandle={handleClick}/>
                    <TailButton color ="blue" caption="취소" onHandle={handleClick2}/>
                </form>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 pb-3'>
                {cardTags}
            </div>
        </div>
    )
}