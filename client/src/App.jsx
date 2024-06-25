import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Loader from './component/Loader'


const App = () => {
  const [showLoading, setShowLoading] = useState(false);
  return ( 
    <BrowserRouter>
    {showLoading ? <Loader/> : null}
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App