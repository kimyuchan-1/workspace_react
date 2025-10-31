import TailButton from "../component/TailButton";
import { useNavigate } from "react-router-dom";

export default function RouteHome() {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="flex">
                <TailButton color="blue" caption="page1" onHandle={()=>navigate("/p1/사과/바나나")}/>
                <TailButton color="blue" caption="page2" onHandle={()=>navigate("/p2")}/>
            </div>
        </div>
    )
}
