/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import signUpImg from '../../assets/others/authentication2.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaBeer, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/Social/SocialLogin';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)

                const saveUser = { name: data.name, email: data.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Create User SuccessFully!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/');
                        }
                    })

                    .then(() => {
                        console.log('User profile info Updated!');

                    })
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss || SignUp</title>
            </Helmet>
            <div className='max-w-6xl mx-auto'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <img src={signUpImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <h1 className="text-5xl font-bold">SignUp now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>Name is required!</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" {...register("photoUrl", { required: true })} placeholder="photoUrl" className="input input-bordered" />
                                    {errors.photoUrl && <span className='text-red-600'>Photo Url is required!</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600'>Email is required!</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password && <span className='text-red-600'>Password is required!</span>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600'>Password Must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password Must be Less Then 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-600'>Password Must be one lowercase, one uppercase, one number and one special characters</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='ml-8 mb-2 text-yellow-600'><small>Already Registered? <Link to={'/login'}>Go to Login!</Link></small></p>
                            <p className='ml-8 mb-3'>Or sign up with?</p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;