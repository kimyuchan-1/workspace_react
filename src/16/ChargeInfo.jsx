import zcode from "./data/zcode.json"
import zscode from "./data/zscode.json"
import kind from "./data/kind.json"
import kinddetail from "./data/kinddetail.json"

import TailSelect from "../component/TailSelect"
import TailButton from "../component/TailButton"
import ChargerCard from "./ChargerCard"

import { useEffect, useRef, useState } from "react"
import ChargerPlace from "./ChargerPlace"
import { Link } from "react-router-dom"

export default function ChargerInfo() {
    //상태변수
    const [tdata, setTdata] = useState([]);
    const [zsc, setZsc] = useState(null);
    const [kindDetail, setKindDetail] = useState(null);
    const [isLoding, setIsLoding] = useState(false);
    const [cardTags, setCardTags] = useState([]);
    const [placeTags, setPlaceTags] = useState([]);

    //select 박스 
    const sel1Ref = useRef();
    const sel2Ref = useRef();
    const sel3Ref = useRef();
    const sel4Ref = useRef();

    //데이터가져오기
    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_APP_API_KEY;
        const baseUrl = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?`;
        let url = `${baseUrl}serviceKey=${apikey}`;
        url = `${url}&numOfRows=100&pageNo=1`;
        url = `${url}&zcode=${sel1Ref.current.value}&zscode=${sel2Ref.current.value}`;
        url = `${url}&kind=${sel3Ref.current.value}&kindDetail=${sel4Ref.current.value}`;
        url = `${url}&dataType=JSON`;

        setIsLoding(true);
        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.items.item);
        setIsLoding(false);

    }

    //시도 선택
    const handleZcode = () => {
        setZsc(null);
        setTdata([]);
        setIsLoding(false);

        if (sel1Ref.current.value == "")
            setZsc(null);
        else
            setZsc(zscode[sel1Ref.current.value]);
    }

    //충전소 구분
    const handleKind = () => {
        setKindDetail(null);
        setTdata([]);
        setIsLoding(false);

        if (sel3Ref.current.value == "")
            setKindDetail(null);
        else
            setKindDetail(kinddetail[sel3Ref.current.value]);
    }

    //취소 
    const handleCancel = () => {
        sel1Ref.current.value = "";
        sel2Ref.current.value = "";
        sel3Ref.current.value = "";
        sel4Ref.current.value = "";

        setZsc(null);
        setKindDetail(null);
        setTdata([]);
        setIsLoding(false);
    }

    //검색
    const handleSearch = () => {
        if (sel1Ref.current.value == "") {
            alert("시도를 선택하세요.");
            sel1Ref.current.focus();
            return;
        }
        if (sel2Ref.current.value == "") {
            alert("지역동을 선택하세요.");
            sel2Ref.current.focus();
            return;
        }
        if (sel3Ref.current.value == "") {
            alert("충전소 구분을 선택하세요.");
            sel3Ref.current.focus();
            return;
        }
        if (sel4Ref.current.value == "") {
            alert("충전소 상세를 선택하세요.");
            sel4Ref.current.focus();
            return;
        }

        setCardTags([]);
        setPlaceTags([]);

        getFetchData();
    }


    // fetch가 완료되면
    useEffect(() => {
        if (tdata.length == 0) return;

        const tempTags = [
        <ChargerCard color="orange" title="충전소수" key="chargecard0" num={tdata.length} />,
        <ChargerCard color="blue" title="통신이상" key="chargecard1" num={tdata.filter(item => item.stat == 1).length} />,
        <ChargerCard color="blue" title="충전대기" key="chargecard2" num={tdata.filter(item => item.stat == 2).length} />,
        <ChargerCard color="blue" title="충전중" key="chargecard3" num={tdata.filter(item => item.stat == 3).length} />,
        <ChargerCard color="blue" title="운영중지" key="chargecard4" num={tdata.filter(item => item.stat == 4).length} />,
        <ChargerCard color="blue" title="점검중" key="chargecard5" num={tdata.filter(item => item.stat == 5).length} />,
        <ChargerCard color="blue" title="상태미확인" key="chargecard9" num={tdata.filter(item => item.stat == 9).length} />
        ];
        setCardTags(tempTags);



    }, [tdata]);

    useEffect(() => {
        const tempTags = tdata.map((item,idx) => {
            return (<Link to = "/charger/detail"
                          key = {item.statId+idx}
                          state ={{item:item}}>
                        <ChargerPlace value={item.statNm} key={item.statId} />
                    </Link>);
        });
        setPlaceTags(tempTags)
    }, [cardTags])

    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="w-full text-2xl font-bold p-5 mb-4 text-left">
                전기차 충전소 정보
            </h1>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                <TailSelect id="sel1"
                    ref={sel1Ref}
                    title="시도"
                    opk={Object.keys(zcode)}
                    opv={Object.values(zcode)}
                    onHandle={handleZcode}
                />

                <TailSelect id="sel2"
                    ref={sel2Ref}
                    title="지역동"
                    opk={zsc ? Object.values(zsc) : ""}
                    opv={zsc ? Object.keys(zsc) : ""}
                    onHandle={() => { }}
                />

                <TailSelect id="sel3"
                    ref={sel3Ref}
                    title="충전소구분"
                    opk={Object.keys(kind)}
                    opv={Object.values(kind)}
                    onHandle={handleKind}
                />

                <TailSelect id="sel4"
                    ref={sel4Ref}
                    title="충전소 상세"
                    opk={kindDetail ? Object.values(kindDetail) : ""}
                    opv={kindDetail ? Object.keys(kindDetail) : ""}
                    onHandle={() => { }}
                />

                <TailButton caption="검색" color="blue" onHandle={handleSearch} />
                <TailButton caption="취소" color="orange" onHandle={handleCancel} />
            </div>
            {
                (tdata.length != 0) &&
                <div className="w-full">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-5">
                        {cardTags}
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-8 gap-4 m-5">
                        {placeTags}
                    </div>
                </div>
            }
            {
                isLoding &&
                <div className="w-full p-5 mb-4 flex justify-center items-center">
                    <img src="/img/loading.gif" alt="로딩중" />
                </div>
            }
        </div>

    )
}