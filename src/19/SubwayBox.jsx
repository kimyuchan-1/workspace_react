import scode from "./scode.json"
import SubwayDetailBox from "./SubwayDetailBox";

export default function SubwayBox({site, city, time, data}) {
    const year = time.substring(0, 4);
    const month = time.substring(4, 6);
    const day = time.substring(6, 8);
    const hour = time.substring(8, 10);

    const scodeKeys = Object.keys(scode);
    const detailBoxTags = scodeKeys.map((item,idx) => <SubwayDetailBox key = {scode[item].name} notation = {item} name = {scode[item].name} unit = {scode[item].unit} data ={data[idx]} hour ={hour}/>)
    
    return (
        <div className="w-full flex flex-col p-2">
            <div className="text-xs ">
                {site} {city} (시각 : {year}. {month}. {day} {hour}시)
            </div>
            <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-9 gap-1">
                {detailBoxTags}
            </div>
        </div>
    )
}
