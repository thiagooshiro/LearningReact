// Props e outras coisitas mas

import React from 'react'
import PropTypes from 'prop-types'

function Profile({name, lastname}) {
	return(
        <div>
            <p>Bem vindo: {name} {lastname}</p>
        </div>

	)
}


export default Profile