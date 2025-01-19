import React from 'react';
import './App.css';
import './AppSecondPage.css';
import HomePage from './components/HomePage/HomePage';
import SearchTrain from './components/SearchTrainPage/SearchTrain';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/MainPage/Footer';
import HeaderLogo from './components/MainPage/HeaderLogo';
import { Provider } from "react-redux";
import store from './components/Redux/store'; 
import ChoseSeats from './components/ChoseSeatsPage/ChoseSeats';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <HeaderLogo/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trains" element={<SearchTrain/>} />
        <Route path="/seats" element={<ChoseSeats/>} />
        {/* <Route path="*" element={<NotFound />} /> */} 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
