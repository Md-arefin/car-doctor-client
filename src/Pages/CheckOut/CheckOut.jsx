import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const CheckOut = () => {

    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, _id, price } = service;

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;

        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }

        console.log(order)
    }

    return (
        <div>

            <h2 className="text-center text-4xl font-semibold">Service: {title}</h2>


            <div className="card w-full  shadow-2xl bg-base-100 max-w-5xl mx-auto my-10">
                <form onSubmit={handleBookService}>
                    <div className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name"
                                    defaultValue={user?.displayName}
                                    name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="" name='date' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="phone" name="email"
                                    defaultValue={user?.email}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due amount</span>
                                </label>
                                <input type="text"
                                    defaultValue={'$' + price}
                                    className="input input-bordered" />

                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='Order Confirm' className="btn btn-primary btn-block" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;