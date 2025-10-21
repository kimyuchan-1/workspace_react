import { useState, useEffect } from "react"

export default function MyClockTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
    let timerID = setInterval(()=>{
      setCurrentTime(new Date());
    }, 1000);
    
    // 상태가 끝날 때 return에 있는 일을 함
    return ()=>clearInterval(timerID);

  },[]);


  return (
    <div className="text-3xl font-bold text-center
                    m-2 p-2 select-none" >
      현재 시각&nbsp;:&nbsp;
      <span>{currentTime.toLocaleTimeString()}</span>
    </div>
  )
}
