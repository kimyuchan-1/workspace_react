import TrafficNav from "./TrafficNav"
import TrafficInfo from "./TrafficInfo";
//import trafficData from "./교통사고통계.json"
import { useState, useEffect } from 'react'

export default function Traffic() {
  const [tData, setTData] = useState([]);
  const [c1, setC1] = useState();
  const [selectC1, setSelectC1] = useState();
  const [c2, setC2] = useState();
  const [selectC2, setSelectC2] = useState();
  const [infoTags, setInfoTags] = useState();
  const [sumInfo, setSumInfo] = useState([0,0,0,0,0]);

  const getFetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const baseUrl = "https://api.odcloud.kr/api/15070288/v1/uddi:c5c1cd3f-650e-45eb-8697-cf6b79661dab?page=1&perPage=117&";
    let url = `${baseUrl}serviceKey=${apiKey}`

    try {
        const resp = await fetch(url);
        const data = await resp.json();
        const trafficData = data.data;
        //console.log(trafficData);
        setTData(trafficData);
        } catch (error) {
            console.log("에러 발생",error);
        }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    const category = [
      ...new Set(tData.map(item => item['사고유형대분류']))
    ];
    setC1(category);
    //console.log(c1);
  }, [tData]);

  useEffect(() => {
    console.log("대분류", selectC1);

    if (selectC1 != null) {
      const temp = tData.filter(item => item["사고유형대분류"] == selectC1);
      //console.log(temp);
      const category = [
        ...new Set(temp.map(item => item['사고유형']))
      ];
      setC2(category);
      setInfoTags([]);
      setSumInfo([0,0,0,0,0]);
      //console.log(c2);
    }

  }, [selectC1]);

  useEffect(() => {
    console.log("사고유형", selectC2);

    if (selectC2 != null) {
      const temp = tData.filter(item => item["사고유형대분류"] == selectC1 && item["사고유형"] == selectC2);
      //console.log(temp);

      let tempList = [0,0,0,0,0];

      for (let item of temp) {
        tempList[0] = tempList[0] + item["사고건수"];
        tempList[1] = tempList[1] + item["사망자수"];
        tempList[2] = tempList[2] + item["중상자수"];
        tempList[3] = tempList[3] + item["경상자수"];
        tempList[4] = tempList[4] + item["부상신고자수"];
      }

      setSumInfo(tempList);

      const InfoTags = temp.map(item => <TrafficInfo nAcc={item["사고건수"]}
        nDeath={item["사망자수"]}
        nSerious={item["중상자수"]}
        nInjured={item["경상자수"]}
        nReported={item["부상신고자수"]}
        road={item["도로종류"]}
        key={item["도로종류"]} />);
      setInfoTags(InfoTags);
    }
  }, [selectC2])

  return (
    <div className="w-full flex flex-col justify-start items-center">
      {c1 &&
        <TrafficNav category={c1} title={"사고유형 대분류"} selectC={selectC1} setSelectC={setSelectC1} />
      }
      {c2 &&
        <TrafficNav category={c2} title={"사고유형"} selectC={selectC2} setSelectC={setSelectC2} />
      }
      {infoTags &&
        <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-3 font-bold'>도로종류</th>
              <th scope='col' className='p-3 font-bold'>사고건수(건)</th>
              <th scope='col' className='p-3 font-bold'>사망자수(명)</th>
              <th scope='col' className='p-3 font-bold'>중상자수(명)</th>
              <th scope='col' className='p-3 font-bold'>경상자수(명)</th>
              <th scope='col' className='p-3 font-bold'>부상신고자수(명)</th>
            </tr>
          </thead>
          <tbody>
            {infoTags}
            
          </tbody>
          <tfoot>
            <tr className="text-sm bg-gray-400 text-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td className="p-4 text-center">
                합계
              </td>
              <td className="p-4 text-center">
                {parseInt(sumInfo[0]).toLocaleString()}
              </td>
              <td className="p-4 text-center">
                {parseInt(sumInfo[1]).toLocaleString()}
              </td>
              <td className="p-4 text-center">
                {parseInt(sumInfo[2]).toLocaleString()}
              </td>
              <td className="p-4 text-center">
                {parseInt(sumInfo[3]).toLocaleString()}
              </td>
              <td className="p-4 text-center">
                {parseInt(sumInfo[4]).toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      }
    </div>
  )
}
