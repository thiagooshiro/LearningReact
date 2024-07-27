import React from 'react'
import './css/card.css'

function Card({title, image}) {
	return(
			<div className='card'>
                <h4>{title}</h4>
				<img className='cardImage' src={image}/>
			</div>
    )
}


export default Card