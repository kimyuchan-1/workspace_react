import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import MyClock from './02/MyClock'
import Lotto from './06/Lotto'
import FoodMain from './07/FoodMain'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import Gallery from './13/Gallery'
import Festival from './14/Festival'
import FestivalContent from './14/FestivalContent'
import ChargeInfo from './16/ChargeInfo'
import ChargerDetail from './16/ChargerDetail'
import JotaiCnt from './17/JotaiCnt'
import FestivalWithJotai from './14_2/FestivalWithJotai'
import FestivalContentWithJotai from './14_2/FestivalContentWithJotai'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoList from './18_1/TodoList'
import Subway from './19/Subway'



function App() { // 함수명은 파일명과 동일해야 하며, 대문자로 시작해야 함, 소문자는 html 태그로 인식함
  // jsx 컴포넌트의 함수는 반드시 return을 해야 함
  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-hidden'>
        <Header/>
        <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/food' element={<FoodMain />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/festival' element={<Festival />} />
            <Route path='/festival/content' element={<FestivalContent />} />
            <Route path='/charger' element={<ChargeInfo />}/>
            <Route path='/charger/detail' element={<ChargerDetail />}/>
            <Route path='/jotai' element={<JotaiCnt />} />
            <Route path='/festivalwithjotai' element={<FestivalWithJotai />} />
            <Route path='/festivalwithjotai/contents' element={<FestivalContentWithJotai />} />
            <Route path='/todolist' element={<TodoList />}/>
            <Route path='/subway' element={<Subway />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App // import 하기 위해서는 반드시 export 해야 함
