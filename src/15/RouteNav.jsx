import { Link, useNavigate } from "react-router-dom";


export default function RouteNav() {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate("/p2?items1=&items2=");
    };

    return (
        <div className="w-full h-40 flex justify-center items-center">
            <Link to="/" className="py-2 px-5 mx-2 select-none
                            border border-amber-200 rounded-sm
                            hover:bg-amber-100 hover:cursor-pointer hover:font-bold">
                Home
            </Link>
            <Link to="p1/사과/바나나" className="py-2 px-5 mx-2 select-none
                            border border-amber-200 rounded-sm
                            hover:bg-amber-100 hover:cursor-pointer hover:font-bold">
                Page1
            </Link>
            <div onClick={handleClick} className="py-2 px-5 mx-2 select-none
                            border border-amber-200 rounded-sm
                            hover:bg-amber-100 hover:cursor-pointer hover:font-bold">
                Page2
            </div>

        </div>
    )
}
