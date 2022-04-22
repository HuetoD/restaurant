import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <div>
        <Routes>
          <Route  path='/restaurant/' element={<Login/>}></Route>
          <Route  path='/restaurant/login' element={<Login/>}></Route>
          <Route  path='/restaurant/register' element={<Register/>}></Route>
        </Routes>
    </div>
  );
}
