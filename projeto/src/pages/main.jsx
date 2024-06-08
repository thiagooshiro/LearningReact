import React from 'react'
import './main.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Pessoas from '../components/pessoas'

function Main() {
	return(
		<div>
			<Header/>
			<div className='main-content'>
				<h1>Some stuff</h1>
				<Pessoas />
			</div>
			<Footer/>
		</div>
	)
}


export default  Main 