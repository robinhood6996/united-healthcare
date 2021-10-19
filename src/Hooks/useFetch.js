import { useEffect, useState } from 'react';

const useFetch = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://robinhood6996.github.io/health-care-json/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services]
};

export default useFetch;