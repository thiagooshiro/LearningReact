import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Card from './card'
import './css/card.css'

function ShowRecipes() {
    const { searchByCategory } = useContext(UserContext)
    console.log(searchByCategory)
	return(
        <div className='cardContainer'>
		{ searchByCategory && searchByCategory.map((element) => (
            <Card title={element.strMeal} image={element.strMealThumb} />
        ))}
        </div>
	)
}


export default ShowRecipes
