

const ServiceCard = ({ service }) => {

    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title text-3xl">{title}</h2>
                <p className="font-bold text-orange-500 text-xl">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary rounded-lg">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;