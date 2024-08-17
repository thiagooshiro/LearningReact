import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import RecipeReviewCard from './card'
import './css/card.css'

function ShowRecipes() {
    const { searchByCategory } = useContext(UserContext)
	return(
        <div className='cardContainer'>
		{ searchByCategory && searchByCategory.map((element) => (
            <RecipeReviewCard id={element.idMeal} title={element.strMeal} image={element.strMealThumb} />
        ))}
        </div>
	)
}


export default ShowRecipes
