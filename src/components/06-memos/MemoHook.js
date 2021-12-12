import { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

const MemoHook = () => {

    const { counter, increment } = useCounter(100);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:  <small>{counter}</small></h3>
            <hr />

            <p>{ memoProcesoPesado }</p>

            <button className="btn btn-outline-primary" 
                onClick={increment}
            >
                +1
            </button>

            <button className="btn btn-outline-primary ml-5"
                onClick={ () => setShow(!show) }
            >
                Show / Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}

export default MemoHook;
