'use client';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Signup = () => {

    const { user, createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already have an account? <span className='font-bold'>Login</span></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary capitalize text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;