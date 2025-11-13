import TailSelect from "../component/TailSelect";
import SubwayBox from "./SubwayBox"
import sarea from "./sarea.json"

import { useState, useEffect, useRef, Suspense } from "react"

export default function Subway() {
    return(
        <Suspense fallback={<div className='h-full w-full flex justify-center items-center'><img src="/img/loading.gif" alt="로딩중" /></div>}>
            <SubwayContent />
        </Suspense>
    );
}

function SubwayContent() {
    const [boxTags, setBoxTags] = useState([]);
    const [sData, setSData] = useState([]);
    let today = new Date();
    const [selectDate, setSelectDate] = useState(today.toISOString().slice(0, 10).replaceAll("-", ""));
    const location = useRef();

    const getFetchData = async () => {
        const baseUrl = '/subway-api/getIndoorAirQualityByStation';
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        let url = `${baseUrl}?serviceKey=${apiKey}`;
        url += `&pageNo=1&numOfRows=24&resultType=json&controlnumber=${selectDate}&areaIndex=${location.current.value}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            const temp = data.response.body.items.item;
            console.log(temp.sort((a, b) => a.controlnumber.localeCompare(b.controlnumber)));
            setSData(temp.sort((a, b) => a.controlnumber.localeCompare(b.controlnumber)));

        } catch (error) {
            console.log("에러 발생", error);
        }
    };

    const changeLocation = () => {
        getFetchData();
    };

    const onHandleDt = (event) => {
        let value = event.target.value.replaceAll("-", "");
        setSelectDate(value);
    };

    useEffect(() => {
        const temp = sData.map(item => {
            const data = [item.pm10, item.co2, item.co, item.no2, item.no, item.nox, item.o3, item.pm25, item.fad];

            return(<SubwayBox key = {item.controlnumber}
                              site = {item.site}
                              city = {item.city}
                              time = {item.controlnumber}
                              data = {data}/>);
        });
        setBoxTags(temp);
    }, [sData]);

    useEffect(() => {
        if (location.current.value == "") {
            return;
        } else {
            getFetchData();
            setBoxTags([]);
        }
    }, [selectDate]);

    return (
        <div className="w-49/50 flex flex-col">
            <div className="w-full flex flex-row justify-around items-center px-6 py-4">
                <div className="w-full text-3xl font-bold max-w-xs text-center pr-6">
                    부산 실내공기질 정보
                </div>
                <TailSelect id = "location" 
                            ref = {location} 
                            title = "측정소" 
                            opk = {sarea.map(item => Object.values(item)[0])} 
                            opv = {sarea.map(item => Object.values(item)[1])} 
                            onHandle = {changeLocation}/>
            </div>
            <div className='text-xs pt-3 pb-1 flex justify-end'>
                기준일&nbsp;:&nbsp;
                <p>
                    <input type='date' 
                        max={today.toISOString().slice(0, 10)}  
                        value={selectDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")}
                        onChange={onHandleDt} 
                        className='flex justify-center'/>
                </p>
            </div>
            {boxTags}
        </div>
    )
}
