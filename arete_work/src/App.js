import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path="*" element={<div>Page Not found</div>} />
    </Routes>
  </>
}

export default App;