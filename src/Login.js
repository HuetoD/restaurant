import React, {Component}from 'react'
import './Login.css';

class Login extends Component{
    render(){
        return(
        <div className='container glass'>
            <form className='form'>
                <img src='./hat.png' alt='img' className='img'></img>
                <div className='form-group'>
                    <input id='user' className='input glass' type='text' placeholder='a'></input>
                    <label htmlFor='user' className='label'>Usuario</label>
                </div>
                <div className='form-group'>
                    <input id='password' className='input glass' type='password' placeholder='a'></input>
                    <label htmlFor='password' className='label'>Contraseña</label>
                </div>
                <input className='button glass' type='submit' value='Iniciar sesion'></input>
                <div className='links'>
                <a href="#">¿Usuario nuevo? Registrate</a>
                <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
            </form>
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