import MyClock from './02/MyClock'
import MyList from './04/MyList'
import './App.css'

function App() { // 함수명은 파일명과 동일해야 하며, 대문자로 시작해야 함, 소문자는 html 태그로 인식함
  // jsx 컴포넌트의 함수는 반드시 return을 해야 함
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <MyList />
      {/*<MyClock />*/}
    </div>
  )
}

export default App // import 하기 위해서는 반드시 export 해야 함
