//Para criar um componente React, começamos pela importação do React da biblioteca 'react'
import React from "react";



//A função deve inicar seu nome com a letra maíscula e ela em si será o componente;


function ExemploComponente(props){
    let contador = 0
    console.log(props)
    //O retorno da função deverá ser escrito dentro dos parenteses e é possível retornar HTML e código javascript.
    return(
        <div>
            { props.usuario ? <div>{props.usuario.toUpperCase()} bem vinda!</div>: <p>Usuário não encontrado</p>}
            <div>{contador}</div>
        </div>
    );
}

export default ExemploComponente