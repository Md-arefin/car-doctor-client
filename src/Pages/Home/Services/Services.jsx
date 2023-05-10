import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('service.json')
        .then( res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className="my-10">
            <div className="text-center px-20 space-y-3">
                <h3 className="text-3xl text-orange-600 font-bold ">Services</h3>
                <h2 className="text-5xl font-bold ">Our Service Area</h2>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis quis ipsum. Quidem iste in consequatur nihil rem fuga hic nostrum, sint, veritatis id beatae, illo quasi! Eaque, odit culpa.</p>
            </div>

            {/*  */}

            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-6 py-10">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;