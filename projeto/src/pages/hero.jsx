import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import HeroInputField from '../components/heroInputField'


function Hero() {
    const { user, setUser } = useContext(UserContext)

	useEffect(() => {
		let email = localStorage.getItem('email')
		if (!email) { 
			email = 'usuário'
		}
		console.log(email)
		setUser(email)
	},[])

	return(
		<div>
            {<h1>Bem vindo, {user ? user : 'usuario'}!</h1>}
			<HeroInputField />
        </div>
	)
}


export default Hero