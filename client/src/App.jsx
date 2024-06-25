import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import Loader from './component/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { SetPortfolioData } from './redux/rootSlice'


const App = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData])
  

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App