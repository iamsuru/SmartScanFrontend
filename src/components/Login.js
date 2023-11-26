import React from 'react';

function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <form method="post" action="/login">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className='mb-3 mt-4'>
                            <input type='submit' className='btn btn-primary l-btn' value='Login' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
