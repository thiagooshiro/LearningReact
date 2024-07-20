import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'


function LoginForm() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { setUser } = useContext(UserContext)


    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const dados = await fetch('./usuarios.json')
        const usuarios = await dados.json()
        console.log(usuarios)

        for(let usuario of usuarios) {
            console.log(usuario)
            if (usuario.email === email && usuario.senha === senha) {
                setUser(usuario.email)
                localStorage.setItem('email', usuario.email)
                navigate('/hero')
            }
            else {
                alert('Senha ou email incorretos')
            }
        }        
    };

    const handleEmail = (target) => {
        setEmail(target.value);
        };

        const handleSenha = (target) => {
            setSenha(target.value);
            console.log(senha)
            
        };



	return(
		<div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="email" placeholder="Email" 
                onChange={ ({ target }) => handleEmail(target) }
                value={email}
                name='email'
                required/>
                <input type="password" placeholder="Senha" 
                value={senha}
                name='password'
                onChange={ ({ target }) => handleSenha(target) }
                required/>
                <button type="submit">Entrar</button>
            </form>
        </div>
	)
}


export default LoginForm