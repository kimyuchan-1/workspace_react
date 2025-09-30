import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
  return (
    <div className="bg-lime-900 w-150 h-150
                    text-white
                    flex justify-center items-center">
        div1
      <MyDiv2 />
    </div>
  )
}
