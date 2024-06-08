import React from 'react'
import './css/header.css'

function Header() {
	return(
		<nav>
			<img src='favicon.ico' alt="some stuff"/>
			<div className='login-field'>
				<p>Login:</p>
				<input placeholder='Email'></input>
				<input placeholder='Senha'></input>
			</div>
		</nav>
	)
}


export default Header