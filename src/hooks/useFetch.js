import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if(isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
                
                // fines de demosrtración
                // setTimeout(() => {
                //     if(isMounted.current) {
                //         setState({
                //             loading: false,
                //             error: null,
                //             data
                //         })
                //     } else console.log('setState no se llamó');
                // }, 4000);

            })
    }, [url])

    return state;
}
