import React from 'react'
import './main.css'
import Footer from '../components/footer'
import Header from '../components/header'
import LoginForm from '../components/loginform'

function Main() {

	return(
		<div>
			<Header/>
			<div className='main-content'>
				<LoginForm />
				<Footer className={'footer'}/>
			</div>
		</div>
	)
}


export default  Main 