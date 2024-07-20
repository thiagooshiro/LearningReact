import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HeroInputField() {
    const [options, setOptions] = useState([])
   
    useEffect(() => { 
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
                const data = await response.json();
                console.log(data); // Verificar a estrutura dos dados recebidos

                if (data && data.meals) {
                    setOptions(data.meals); // Configurar o estado 'options' com o array de 'meals'
                }
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };
		fetchCategories();
		}, [])


	return(
		<div>
            <label>Categorias:</label>
            <select>
                { options.length > 0 ? 
                options.map((element) => (
                    <option >{element.strCategory}</option>
                )): <option>Erro!</option> }
            </select>
        </div>
	)
}


export default HeroInputField