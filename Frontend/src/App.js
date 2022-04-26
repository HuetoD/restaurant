import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

import Sidebar from './components/Sidebar';


export default function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      {/* <Routes>
        <Route path='/restaurant/' element={<Login />}></Route>
        <Route path='/restaurant/login' element={<Login />}></Route>
        <Route path='/restaurant/register' element={<Register />}></Route>
      </Routes> */}
    </div>
  );
}
