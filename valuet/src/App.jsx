import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Pages/Login'
import Loyaut from './Loyaut/Loyaut'
import Home from './Pages/Home'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Loyaut/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
