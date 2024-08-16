import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'flowbite/dist/flowbite.css';
import ProkerPage from './pages/proker';
import AppShell from './AppShell';
import DivisiPage from './pages/divisi';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
  <Routes >
    <Route path="/" element={<AppShell />}>
      <Route index element={<HomePage />} />
      <Route path="/divisi/:divisi" element={<DivisiPage />} />
      <Route path="/programkerja/:proker" element={<ProkerPage />}/>
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  )
}

export default App
