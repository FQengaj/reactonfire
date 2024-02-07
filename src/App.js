import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Valentine } from './pages/valintine';
// import { Auth } from './pages/auth/login';
// import { User } from './pages/playground/index';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Valentine />}/>
            {/* <Route path='/' exact element={<Auth />} />
            <Route path='/user' exact element={<User />} /> */}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
