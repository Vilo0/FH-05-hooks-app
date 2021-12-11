import { useEffect, useState } from 'react';
import './effects.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // Se ejecuta una sola vez
    useEffect(() => {
        console.log('Hey!');
    }, []);

    useEffect(() => {
        console.log('formState cambió');
    }, [formState]);

    useEffect(() => {
        console.log('email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value,
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="email@ejemplo.cl"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
        </>
    )
}

export default SimpleForm;
