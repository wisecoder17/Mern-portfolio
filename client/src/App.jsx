import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import Loader from './component/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, SetPortfolioData, HideLoading} from './redux/rootSlice'
import Admin from './pages/Admin'


const App = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading())
    } catch (error) {
      dispatch(HideLoading())
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);




  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<Admin />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App