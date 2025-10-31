import {useState, useEffect, useRef, use} from 'react'
import TailCard from '../component/TailCard'

export default function Festival() {
    const [fData, setFData] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState([]);
    const [cardTags, setCardTags] = useState([]);
    const [optionTags, setOptionTags] = useState([]);

    const getFetchData = async () => {
        const apiKey = import.meta.env.VITE_APP_API_KEY; 
        const baseUrl = '/festival-api/getFestivalKr?';
        let url = `${baseUrl}serviceKey=${apiKey}&pageNo=1&numOfRows=41&resultType=JSON`;

        try{
            console.log(url);
            const resp = await fetch(url);
            const data = await resp.json();
            const festivalData = await data.getFestivalKr.item;
            console.log(festivalData);
            setFData(festivalData);

            const temp =  [
            ...new Set(festivalData.map(item => item.GUGUN_NM))
            ].sort();
            const options = temp.map(item => <option key = {item} value = {item}>{item}</option>);
            setOptionTags(options);

            setSelectedDistrict(festivalData);

        } catch (error) {
            console.log("에러 발생",error);
        }

    };

    const selectDistrict = (e) => {
        e.preventDefault();

        if (e.target.value == 1) {
            setSelectedDistrict(fData);
        } else {
            const temp = fData.filter(item => item.GUGUN_NM === e.target.value);
            console.log(temp);
            setSelectedDistrict(temp);
        }
    };

    useEffect(()=>{
        const tempTags = selectedDistrict.map((item) => 
        <TailCard title={item.TITLE} url={item.MAIN_IMG_THUMB} 
                  location={item.ITEMCNTNTS.split(/[.!?]+/g)[0]+"."+item.ITEMCNTNTS.split(/[.!?]+/g)[1]+"."} keyword={item.PLACE} 
                  keyVal={item.UC_SEQ} key={item.UC_SEQ}/>);

        setCardTags(tempTags);
    },[selectedDistrict]);

    useEffect(()=>{
        getFetchData();
    },[]);

    return (
        <div className='w-full flex flex-col justify-start items-center p-3'>
            <h2 className='text-3xl font-bold m-1'>부산축제정보</h2>
            <select className='border-solid border-1 border-gray-500 
                               m-3 p-1 w-3/10 text-left text-sm rounded-sm'
                    name = "district"
                    onChange={selectDistrict}
                    defaultValue="1"
                    required>
                <option value="1">-- 지역 선택 --</option>
                {optionTags}
            </select>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 pb-3'>
                {cardTags}
            </div>
        </div>
    )
}
