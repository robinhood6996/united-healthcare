import { useEffect, useState } from 'react';

const useDoctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://robinhood6996.github.io/health-care-json/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return [doctors]
};

export default useDoctors;