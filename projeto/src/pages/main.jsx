import React, { useEffect, useContext } from 'react'
import './main.css'
import Footer from '../components/footer'
import Header from '../components/header'
import { UserContext } from '../context/userContext'
import Profile from '../didatico/aula2/aula2'
import ExemploComponente from '../didatico/aula3/exemploComponente'
import LoginForm from '../components/loginform'

function Main() {
	const {pessoas, setPessoas} = useContext(UserContext)

	// useEffect(() => { 
	// 	const fetchUsers = async () => {
	// 		const response = await fetch('/pessoas.json')
	// 			const data = await response.json();
	// 		  	setPessoas(data);
	// 	  };
	// 	fetchUsers();
	// 	}, [])

		

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