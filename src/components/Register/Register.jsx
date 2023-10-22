import { useContext, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext);

    const handlRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // reset error
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters.');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one upper-case.')
            return;
        }else if(!/[!@#$%^&*()_+{}:;<>,.?~]/.test(password)){
            setRegisterError('Password should have special characters.')
            return;
        }

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            setSuccess('User Registerd.');
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message);
        })

    }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handlRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Ragister</button>
                    </div>
                    <p>Already have a account ?<Link to={'/login'}>
                    <button className="btn btn-link">Log in</button>
                    </Link></p>
                </form>
                {
                    success && <p className="text-green-700">{success}</p>
                }
                {
                    registerError && <p className="text-pink-700">{registerError}</p>
                }
            </div>
        </div>
    </div>
    );
};

export default Register;