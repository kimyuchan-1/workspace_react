import { useAtomValue } from "jotai"
import { atomCnt, atomDbCnt } from "./AtomsCnt"
import JotaiBt from "./JotaiBt";


export default function Jotai() {
    const cnt = useAtomValue(atomCnt);
    const dbCnt = useAtomValue(atomDbCnt);

    return (
        <div className="w-full
                        flex flex-col justify-center items-center">
            <div className="font-bold text-3xl m-4">Jotai 전역 상태 관리</div>
            <div className="font-bold text-xl bg-amber-100 w-3/5 p-10 
                            rounded-lg flex flex-col justify-center items-start">
                <div className="text-blue-400 mb-3">count : {cnt}</div>
                <div className="mb-1">double count : {dbCnt}</div>
            </div>
            <JotaiBt />
        </div>
    )
}
