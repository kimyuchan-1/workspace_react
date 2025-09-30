export default function MyClockTime() {
  return (
    <div className="text-3xl font-bold text-center
                    m-2 p-2" >
        현재 시각&nbsp;:&nbsp;
      <span>{new Date().toLocaleTimeString()}</span>
    </div>
  )
}
