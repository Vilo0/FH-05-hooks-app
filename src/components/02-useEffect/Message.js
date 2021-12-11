import { useEffect } from 'react'

const Message = () => {

    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('componente desmontado');
        }
    }, [])

    return (
        <>
            <h3>Eres Genial</h3>
        </>
    )
}

export default Message
