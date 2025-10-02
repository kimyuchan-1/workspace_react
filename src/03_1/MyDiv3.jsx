export default function MyDiv3({d1,d2,d3}) {
  return (
    <div className="bg-lime-500 w-9/10 h-9/10 p-5 m-5
                    text-white text-2xl font-bold
                    flex flex-col justify-start items-center">
      <h>{d1} &gt; {d2} &gt; {d3}</h>
    </div>
  )
}
