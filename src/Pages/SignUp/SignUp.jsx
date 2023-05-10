import { Link } from "react-router-dom";

import login from '../../assets/images/login/login.svg'


const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const ConfirmPassword = form.ConfirmPassword.value;
        console.log(name,email, password, ConfirmPassword)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 lg:mr-12 my-10">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Sign Up</h1>

                        {/* Form Starts */}

                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="enter your name"
                                    name='name'
                                    className="input input-bordered" 
                                    required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="enter your email"
                                    name='email'
                                    className="input input-bordered" 
                                    required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text"
                                    name='password'
                                    placeholder="password" className="input input-bordered"
                                    required
                                />
                                </div>
                            <div className="form-control">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="text"
                                        name='ConfirmPassword'
                                        placeholder="Confirm your password" className="input input-bordered" 
                                        required
                                        />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </div>
                        </form>
                        <p className='text-center my-4'>Have an account? Please <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;