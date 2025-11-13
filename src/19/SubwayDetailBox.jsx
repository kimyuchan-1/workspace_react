export default function SubwayDetailBox({name, notation, unit, data, hour}) {
    const bgColor = {
        "1":"bg-indigo-400",
        "2":"bg-fuchsia-400"
    };

    return (
        <div className="flex flex-col justify-center items-center 
                                border-1 border-gray-300">
            <div className={`w-full h-12 p-1 flex text-center justify-center items-center text-white text-sm ${hour % 2 == 0 ? bgColor["1"] : bgColor["2"]}`}>
                {name}({notation})
            </div>
            <div className="text-sm p-1">
                {data}{unit}
            </div>
        </div>
    )
}
