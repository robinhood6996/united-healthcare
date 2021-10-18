import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';

const SingleService = () => {
    const { id } = useParams();
    const [services] = useFetch();
    // const service = services?.filter(sr => sr.id === id);


    return (
        <div className="container mx-auto">
            <hr />
            {
                services?.filter(item => item.id === id).map(service => <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div className="service-img">
                            <img src="" alt="" />
                            <h1>{service.id}</h1>
                        </div>
                    </div>
                    <div>Hello</div>
                </div>)
            }
        </div>
    );
};

export default SingleService;