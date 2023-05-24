/* eslint-disable no-unused-vars */
import React from 'react';
import signUpImg from '../../assets/others/authentication2.png';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-5xl font-bold">SignUp now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='ml-8 mb-2 text-yellow-600'><small>Already Registered? <Link to={'/login'}>Go to Login!</Link></small></p>
                        <p className='ml-8 mb-3'>Or sign up with?</p>
                        <div className='flex gap-8 mb-6 ml-20'>
                            <button className="btn btn-circle btn-outline"><FaFacebook className='text-xl' /></button>
                            <button className="btn btn-circle btn-outline"><FaGoogle className='text-xl' /></button>
                            <button className="btn btn-circle btn-outline"><FaGithub className='text-xl' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;