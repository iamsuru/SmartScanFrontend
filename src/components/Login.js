import React, { useState } from 'react';

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
                alert(data.message)
            }
            else {
                alert(data.message)
            }
        } catch (error) {
            alert(error)
        }
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <form onSubmit={authenticate}>
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
            </div>
        </div>
    );
}

export default Login;
