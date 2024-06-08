import React from 'react'
import './main.css'
import Footer from '../components/footer'
import Header from '../components/header'

function Main() {
	return(
		<div>
			<Header/>
			<div className='main-content'>
				<h1>Some stuff</h1>
				<Footer/>
			</div>
		</div>
	)
}


export default  Main 