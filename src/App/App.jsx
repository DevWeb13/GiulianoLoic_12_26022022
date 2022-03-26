import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProfilPage from '../pages/ProfilPage/ProfilPage';
import Header from '../components/Header/Header';
import Aside from '../components/Aside/Aside';

const App = () => {
  const [userId, setUserId] = useState(12);
  const [mockedData, setMockedData] = useState(true);
  
  

  return (
    <div className="app">
      <BrowserRouter>
        <Header
          userId={userId}
          setUserId={setUserId}
          mockedData={mockedData}
          setMockedData={setMockedData}
          
        />
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/user/:userId"
            element={<ProfilPage mockedData={mockedData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
