import MyDiv3 from './MyDiv3'

{/*export default function MyDiv2(props) {*/}
export default function MyDiv2({d1,d2,d3}) {
  return (
    <div className='bg-lime-700 w-9/10 h-9/10 p-7 m-7
                    text-white text-2xl font-bold
                    flex flex-col justify-start items-center'>
      {/* <h>{props.d1} {'>'} {props.d2}</h> */}
      {/* <MyDiv3 d1 = {props.d1} d2 = {props.d2} d3 = {props.d3} /> */} 
      <h>{d1} {'>'} {d2}</h> {/*&gt; -> >*/}
      <MyDiv3 d1 = {d1} d2 = {d2} d3 = {d3} />
    </div>
  )
}
