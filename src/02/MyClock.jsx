import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

export default function MyClock() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <MyClockImage />
      <MyClockTime />
    </div>
  )
}
