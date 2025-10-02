import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
  const d1 = "div1";
  const d2 = "div2";
  const d3 = "div3";

  return (
    <div className="bg-lime-900 w-full md:w-7/10 h-1/2 p-10
                    text-white text-2xl font-bold
                    flex flex-col justify-start items-center">
      <h1>{d1}</h1>
      <MyDiv2 d1 = {d1} d2 = {d2} d3 = {d3}/>
    </div>
  )
}
