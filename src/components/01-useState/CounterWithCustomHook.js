import { useCounter } from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />

            <button onClick={ () => decrement(2) }  className='btn btn-outline-primary'> -1 </button>
            <button onClick={ reset } className='btn btn-outline-primary'> Reset </button>
            <button onClick={ () => increment(2) } className='btn btn-outline-primary'> +1 </button>
        </>
    )
}

export default CounterWithCustomHook;
