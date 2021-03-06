import React from 'react'
import {Link} from "react-router-dom";
import logo from '../img/hat.png'
import './FormsLR.css';

export default function Register() {
    return (
        <div className='contpos contposr'>
            <div className='container glass'>
                <form className='form grid'>
                    <img src={logo} alt='logo' className='img' />
                    <div className='form-group'>
                        <input autoComplete='off' id='name' className='input glass' type='text' placeholder='a'></input>
                        <label htmlFor='name' className='label'>Nombre</label>
                    </div>
                    <div className='form-group'>
                        <input autoComplete='off' id='lastname' className='input glass' type='text' placeholder='a'></input>
                        <label htmlFor='lastname' className='label'>Apellido</label>
                    </div>
                    <div className='form-group email'>
                        <input autoComplete='off' id='email' className='input glass' type='email' placeholder='a'></input>
                        <label htmlFor='email' className='label'>Correo</label>
                    </div>
                    <div className='form-group password'>
                        <input autoComplete='off' id='password' className='input glass' type='password' placeholder='a'></input>
                        <label htmlFor='password' className='label'>Contraseña</label>
                    </div>
                    <input className='button glass' type='submit' value='Registrarse'></input>
                    <div className='links already'>
                        <Link to='/restaurant/login'>Ya tengo una cuenta</Link>
                    </div>
                </form>
            </div>
            <div className='box box1 glass'></div>
            <div className='box box2 glass'></div>
            <div className='box box3 glass'></div>
            <div className='box box4 glass'></div>
            <div className='box box5 glass'></div>
        </div>
    );
}
