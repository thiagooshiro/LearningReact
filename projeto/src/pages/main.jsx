import React, { useEffect, useContext } from 'react'
import './main.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Pessoas from '../components/pessoas'
import { UserContext } from '../context/userContext'
import Profile from '../didatico/aula2/aula2'
import ExemploComponente from '../didatico/aula3/exemploComponente'

function Main() {
	const {pessoas, setPessoas} = useContext(UserContext)

	useEffect(() => { 
		const fetchUsers = async () => {
			const response = await fetch('/pessoas.json')
				const data = await response.json();
			  	setPessoas(data);
		  };
		fetchUsers();
		}, [])

		

	return(
		<div>
			<Header/>
			<div className='main-content'>
				<h1>Some stuff</h1>
				<ExemploComponente idade={17} />
				<Profile name={'Thiago'} lastname={'Oshiro'} idade={24} />
				<Pessoas pessoas={pessoas} />
				<Footer/>
			</div>
		</div>
	)
}


export default  Main 