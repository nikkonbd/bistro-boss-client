/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIN = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = {
                    name: loggedInUser.displayName
                    , email: loggedInUser.email
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex gap-8 mb-6 ml-20'>
            <button className="btn btn-circle btn-outline"><FaFacebook className='text-xl' /></button>
            <button onClick={handleGoogleSignIN} className="btn btn-circle btn-outline"><FaGoogle className='text-xl' /></button>
            <button className="btn btn-circle btn-outline"><FaGithub className='text-xl' /></button>
        </div>
    );
};

export default SocialLogin;