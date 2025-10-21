import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import FoodMain from './07/FoodMain'
import MyClock from './02/MyClock'

function App() { // 함수명은 파일명과 동일해야 하며, 대문자로 시작해야 함, 소문자는 html 태그로 인식함
  // jsx 컴포넌트의 함수는 반드시 return을 해야 함
  return (
    <div className='w-full h-screen flex flex-col overflow-hidden'>
      <Header />
      <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
        <MyClock />
      </main>
      <Footer />
    </div>
  )
}

export default App // import 하기 위해서는 반드시 export 해야 함
