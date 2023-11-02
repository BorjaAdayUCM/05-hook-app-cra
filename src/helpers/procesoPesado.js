import React from 'react';

const procesoPesado = (iteraciones) => {
    for(let i = 0; i < iteraciones; i++) {
        console.log('Ahí vamos...')
    }

    return <p>{`Iteraciones realiazadas: ${iteraciones}`}</p>
}

export default procesoPesado;