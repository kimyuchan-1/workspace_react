import { useState, useEffect } from 'react';
import BoxOfficeTable from './BoxOfficeTable';

export default function BoxOffice() {

    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const [selectDate, setSelectDate] = useState(yesterday.toISOString().slice(0, 10).replaceAll("-", ""));
    const [boxesData, setBoxesData] = useState([]);
    const [info, setInfo] = useState(' ');

    const onHandleDt = (event) => {
        let value = event.target.value.replaceAll("-", "");
        setSelectDate(value);
    };
/*
    const getFetchData = () => {
        const apiKey = import.meta.env.VITE_APP_MV_KEY;
        const baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
        let url = `${baseUrl}key=${apiKey}&targetDt=${selectDate}`

        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                const boxes = data.boxOfficeResult.dailyBoxOfficeList;
                setBoxesData(boxes);
            })
            .catch(err => console.log(err))

    };
*/

    const getFetchData = async () => {
        const apiKey = import.meta.env.VITE_APP_MV_KEY;
        const baseUrl = "/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
        let url = `${baseUrl}key=${apiKey}&targetDt=${selectDate}`
        
        try {
        const resp = await fetch(url);
        const data = await resp.json();
        const boxes = data.boxOfficeResult.dailyBoxOfficeList;
        setBoxesData(boxes);
        } catch (error) {
            console.log("에러 발생",error);
        }

    };


    const clickMovie = (movie) => {
        if (!movie) {
            setInfo(" ");
            return;
        }


        const {movieNm: title, openDt, scrnCnt, showCnt}=movie;

        const text = `${title.slice(0,20)}, 개봉일: ${openDt}, 상영 스크린수: ${scrnCnt}, 상영횟수: ${showCnt}`;
        setInfo(text);
    }

    useEffect(() => {
        getFetchData();
        setInfo(' ');
    }, [selectDate]);

    const tags = boxesData.map(item => 
                    <BoxOfficeTable rank = {item.rank} 
                                    title = {item.movieNm.slice(0,20)} 
                                    salesAmt = {item.salesAmt} 
                                    audiCnt = {item.audiCnt} 
                                    salesAcc = {item.salesAcc} 
                                    audiAcc = {item.audiAcc}
                                    rankInten = {item.rankInten}
                                    rankOldAndNew = {item.rankOldAndNew}
                                    onHandle = {() => clickMovie(item)}
                                    key = {item.movieCd}/>
    );

    return (
        <div className='relative overflow-x-auto flex flex-col '>
            <div className='text-2xl font-bold text-center pt-3
                            flex justify-center'>
                일일 박스오피스
            </div>
            
            <div className='text-xs pt-3 pb-1 flex justify-end'>
                기준일&nbsp;:&nbsp;
                <p>
                    <input type='date' 
                        max={yesterday.toISOString().slice(0, 10)}  
                        value={selectDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")}
                        onChange={onHandleDt} 
                        className='flex justify-center'/>
                </p>
            </div>
            <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className='p-3 font-bold'>순위</th>
                        <th scope='col' className='p-3 font-bold'>영화명</th>
                        <th scope='col' className='p-3 font-bold'>매출액</th>
                        <th scope='col' className='p-3 font-bold'>관객수</th>
                        <th scope='col' className='p-3 font-bold'>누적 매출액</th>
                        <th scope='col' className='p-3 font-bold'>누적 관객수</th>
                        <th scope='col' className='p-3 font-bold'>증감율</th>
                    </tr>

                </thead>
                <tbody>
                    {tags}
                </tbody>
            </table>
            <div className='w-full text-sm text-center text-gray-900 bg-gray-300 p-3'>
                {info}
            </div>
        </div>
    )
}
