import { useLocation, useNavigate } from 'react-router-dom'
import TailButton from '../component/TailButton';

export default function ChargerDetail() {
    const location = useLocation();
    const content = location.state.item;

    const navigate = useNavigate();
    const handleHome = () => {
        navigate(`/charger`);
    };

    const kakaoMapUrl = `https://map.kakao.com/link/map/${content?.statNm.replace(',', '').replace(' ', '')},${content?.lat},${content?.lng}`;
    const handleMap = () => {
        window.open(kakaoMapUrl);
    };

    const bgColor = {
        "1": "bg-orange-50",
        "2": "bg-blue-50",
        "3": "bg-green-50",
        "4": "bg-red-50",
        "5": "bg-yellow-50",
        "9": "bg-gray-50"
    }

    return (
        <div className='w-full flex flex-col items-center '>
            <div className='w-full'>
                <div className=' w-full p-5 flex justify-center items-end'>
                    <span className='text-2xl font-bold'>{content.statNm}</span>
                    <span>&nbsp;&nbsp;</span>
                    <span className='text-xs text-gray-600'>{"(충전소ID: "+content.statId+")"}</span>
                </div>
                <div className='w-full flex flex-row justify-end '>
                    <span className={`${bgColor[content.stat]} border border-gray-200 rounded-xl
                                      text-center p-3`} >
                        {content.stat == 1 ? "통신이상" : 
                            content.stat == 2 ? "충전대기" : 
                            content.stat == 3 ? "충전중" : 
                            content.stat == 4 ? "운영중지" : 
                            content.stat == 5 ? "점검중" : "상태미확인"}
                    </span>
                </div>
            </div>
            <div className="w-10/12 p-5 my-5 border border-gray-200 rounded-xl">
                <table className="w-full text-md">
                    <thead>
                        <tr className='h-10 bg-orange-50'>
                            <th className='w-1/3 text-center'>항목</th>
                            <th className='text-center'>내용</th>
                        </tr>
                    </thead>
                    <tbody className='text-left'>
                        <tr className='h-10 border-b-1 border-gray-400'>
                            <td className='text-center'>주소</td>
                            <td className='flex justify-between items-center'>
                                {content.addr}
                                <TailButton color="yellow" caption="카카오지도보기" onHandle={handleMap} />
                            </td>
                        </tr>
                        <tr className='h-10 border-b-1 border-gray-400'>
                            <td className='text-center'>장소</td>
                            <td>{content.statNm}</td>
                        </tr>
                        <tr className='h-10 border-b-1 border-gray-400'>
                            <td className='text-center'>위치</td>
                            <td>{content.floorType == "F" ? "지상" : "지하"}&nbsp;{content.floorNum}층</td>
                        </tr>
                        <tr className='h-10 border-b-1 border-gray-400'>
                            <td className='text-center'>제조사</td>
                            <td>{content.maker}</td>
                        </tr>
                        <tr className='h-10 border-b-1 border-gray-400'>
                            <td className='text-center'>운영기관</td>
                            <td>{content.busiNm}</td>
                        </tr>
                        <tr className='h-10'>
                            <td className='text-center'>연락처</td>
                            <td>{content.busiCall}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='p-3 m-3 w-1/4 min:w-30 '>
                <TailButton color="blue" caption="목록으로" onHandle={handleHome} />
            </div>
        </div>
    )
}
