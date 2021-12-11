import { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoors] = useState({ x: 0, y: 0});
    const { x,y } = coords;

    useEffect(() => {
        console.log('componente montado');
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoors(coords);
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
            <h3>Eres Genial</h3>
            <p>
                x: { x }, y: { y }
            </p>
        </>
    )
}

export default Message
