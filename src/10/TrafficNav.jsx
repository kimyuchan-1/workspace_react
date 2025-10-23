import TailButton from "../component/TailButton"

export default function TrafficNav({category, title, selectC, setSelectC}) {
    const CTags = category.map(item => <TailButton key = {item}
                                                    color = {selectC ==item ? "orange":"blue"}
                                                    caption ={item}
                                                    onHandle={()=>setSelectC(item)}/>);

    return (
        <div className="w-full h-40
                        flex justify-between items-center
                        py-2 px-4 bg-blue-50">
            <div className="text-xl font-bold w-40">
                {title}
            </div>
            <div className="flex justify-end flex-wrap py-5">
                {CTags}
            </div>
        </div>
    )
}
