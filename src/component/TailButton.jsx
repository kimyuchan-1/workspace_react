const BTStyle = {
        blue : {
            base : "bg-blue-600",
            hover : "hover:bg-blue-800"
        },
        orange : {
            base : "bg-orange-600",
            hover : "hover:bg-orange-800"
        },
        lime : {
            base : "bg-lime-600",
            hover : "hover:bg-lime-800"
        }
    };

export default function TailButton({color, caption, onHandle}) {
    const btst = BTStyle[color];

    return (
        <div>
            <button className={`${btst.base} text-white 
                                rounded-md ${btst.hover} hover:font-bold
                                px-4 py-2 m-2 w-9/10
                                cursor-pointer select-none`} 
                    onClick={onHandle}>
                {caption}
            </button>
        </div>
    )
}
