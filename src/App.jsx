import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebPage from './pages/divisi/WebPage';
import GamePage from './pages/divisi/GamePage';
import VcdPage from './pages/divisi/VcdPage';
import OfficePage from './pages/divisi/OfficePage';
import 'flowbite/dist/flowbite.css';

function App() {

  return (
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/web" element={<WebPage />} />
    <Route path="/game" element={<GamePage />} />
    <Route path="/vcd" element={<VcdPage />} />
    <Route path="/office" element={<OfficePage />} />
  </Routes>
  )
}

export default App
