export default function ChargerPlace({ value}) {
    return (
        <div className="w-full h-15 select-none
                        border border-gray-200 rounded-md
                        p-5 hover:cursor-pointer hover:bg-gray-100
                        flex flex-col justify-center items-center">
            {value}
        </div>
    )
}
