import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email_id, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authenticate = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://smartscanbackend.up.railway.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email_id, password }),
            });

            const data = await response.json()

            if (response.ok) {
                toast.success(data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            else {
                toast.error(data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        } catch (error) {
            toast.error(error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <form onSubmit={authenticate}>
                    {console.warn('Updated')}
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={email_id}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3 mt-4'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-3 mt-4'>
                        <input type='submit' className='btn btn-primary l-btn' value='Login' />
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Login;