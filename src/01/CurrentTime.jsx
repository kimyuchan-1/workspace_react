function CurrentTime() {
    return (
        <div className="m-2 p-2 text-center 
                        font-bold text-2xl text-black">
            현재 시간&nbsp;:&nbsp;
            <span>
                {new Date().toLocaleTimeString()}
            </span>
        </div>
    )
}

export default CurrentTime;
