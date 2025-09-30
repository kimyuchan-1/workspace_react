//import ClockImg from './clockImg.png'
import { FcAlarmClock } from "react-icons/fc";


export default function MyClockImage() {
  return (
    <div className='w-100 h-100 flex justify-center items-center'>
      {/*<img src={ClockImg} alt='clock'/>*/}
      <FcAlarmClock className='w-100 h-100 m-2 p-2'/>
    </div>
  )
}
