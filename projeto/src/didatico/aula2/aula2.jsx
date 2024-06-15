// Props e outras coisitas mas

import React from 'react'
import PropTypes from 'prop-types'

function Profile({name, lastname, idade}) {

	return(
        <div>
            <p>Bem vindo: {name} {lastname}</p>
            {idade ? <p>{idade}</p> : <p>Erro, não conseguiu ler a idade</p> }
    
        </div>

	)
}


export default Profile