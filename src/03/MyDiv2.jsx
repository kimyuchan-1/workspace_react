import MyDiv3 from './MyDiv3'

export default function MyDiv2() {
  return (
    <div className='bg-lime-700 w-100 h-100 m-5
                    text-white
                     flex justify-center items-center'>
        div1 {'>'} div2
      <MyDiv3 />
    </div>
  )
}
