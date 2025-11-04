import TailSelect from "../component/TailSelect"
import zcode from "./data/zcode.json"
import zscode from "./data/zscode.json"
import kind from "./data/kind.json"
import kinddetail from "./data/kinddetail.json"
import TailButton from "../component/TailButton"
import { useState } from "react"

export default function ChargeInfo() {
    const [zcodeOptions, setZcodeOptions] = useState([]);
    const [zscodeOptions,setZscodeOptions] = useState([]);
    const [kindOptions,setKindOptions] = useState([]);
    const [kinddetailOptions,setKinddetailOptions] = useState([]);

    const tempZ = Object.values(zcode);
    setZcodeOptions(tempZ);

    const tempKind = Object.values(kind);
    setKindOptions(tempKind);

    const selectZscode = (e) => {
        e.preventDefault();
        const tempZs = Object.values(zscode.filter(item => Object.values(item) == e.target.value));
        setZscodeOptions(tempZs);
    };

    const selectKind = (e) => {
        e.preventDefault();
        const tempKindDetail = Object.values(kinddetail.filter(item => Object.values(item) == e.target.value));
        setKinddetailOptions(tempKindDetail);
    };


    


    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="text-2xl font-bold p-5 mb-4 text-left">
                전기차 충전소 정보
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                <TailSelect caption="시도" options={zcodeOptions} onChange={selectZscode}/>
                <TailSelect caption="지역동" options={zscodeOptions} onChange={()=>{}}/>
                <TailSelect caption="충전소구분" options={kindOptions} onChange={selectKind}/>
                <TailSelect caption="충전소상세" options={kinddetailOptions} onChange={()=>{}}/>
                <TailButton caption="검색" color ="blue" onHandle={()=>{}}/>
                <TailButton caption="취소" color ="orange" onHandle={()=>{}}/>
            </div>
        </div>
    )
}
