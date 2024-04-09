import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LiveDetailPage from './pages/LiveDetailPage';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/detail/*' element={<DetailPage />}></Route>
            <Route path='/live-detail/*' element={<LiveDetailPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
