import TailButton from "../component/TailButton";
import { useAtom } from "jotai";
import { atomCnt } from "./AtomsCnt";


export default function JotaiBt() {
    const [cnt, setCnt] = useAtom(atomCnt);

    return (
        <div className="flex flex-row justify-center p-4">
            <TailButton color="blue" caption="증가" onHandle={()=>{setCnt(cnt+1)}} />
            <TailButton color="orange" caption="감소" onHandle={()=>{setCnt(cnt-1)}} />
            <TailButton color="yellow" caption="초기화" onHandle={()=>{setCnt(0)}} />
        </div>
    )
}
