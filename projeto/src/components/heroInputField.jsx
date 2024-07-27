import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/userContext'


function HeroInputField() {
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState('')
    const {setSearchByCategory, setRecipes } = useContext(UserContext)
   
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

        const handleSelect = (event) => {
            const { target } = event
            setSelected(target.value);
            };

        const fetchRecipeCategory = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selected}`);
                const data = await response.json();
                console.log(data); // Verificar a estrutura dos dados recebidos

                if (data && data.meals) {
                    setSearchByCategory(data.meals); // Configurar o estado 'options' com o array de 'meals'
                }
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };
        

	return(
		<div>
            <label>Categorias:</label>
            <select onChange={(event) => handleSelect(event)}>
                <option disabled={selected}>Selecione a categoria</option>
                { options.length > 0 ? 
                options.map((element) => (
                    <option >{element.strCategory}</option>
                )): <option>Erro!</option> }
            </select>
            <button disabled={!selected} onClick={fetchRecipeCategory}>Pesquisar</button>
        </div>
	)
}


export default HeroInputField