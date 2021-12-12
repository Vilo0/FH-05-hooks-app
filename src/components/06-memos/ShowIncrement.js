import { memo } from 'react';

const ShowIncrement = memo(({ increment }) => {

    console.log('Me volví a generar :(');

    return (
        <button 
            className="btn btn-outline-primary"
            onClick={ () => increment(5) }
        >
            Incrementar
        </button>
    )
})

export default ShowIncrement
