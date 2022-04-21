import React, { Component } from 'react'
import logo from './img/hat.png'
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className='contpos'>
                <div className='container glass'>
                    <form className='form'>
                        <img src={logo} alt='logo' className='img' />
                        <div className='form-group no-margin'>
                            <input autoComplete='off' id='user' className='input glass' type='text' placeholder='a'></input>
                            <label htmlFor='user' className='label'>Usuario</label>
                        </div>
                        <div className='form-group no-margin'>
                            <input autoComplete='off' id='password' className='input glass' type='password' placeholder='a'></input>
                            <label htmlFor='password' className='label'>Contraseña</label>
                            <div className='forgot-link'>
                                <a href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                        <input className='button glass' type='submit' value='Iniciar sesion'></input>
                        <div className='links'>
                            <a href="#">¿Usuario nuevo? Registrate</a>
                            <a href="#">Continuar como invitado</a>
                        </div>
                    </form>
                </div>
                <div className='box box1 glass'></div>
                <div className='box box2 glass'></div>
                <div className='box box3 glass'></div>
                <div className='box box4 glass'></div>
                <div className='box box5 glass'></div>
            </div>
        )
    }
}

export default Login;