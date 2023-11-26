import React from 'react';

function Login() {
    return (
        <>
            <div class="login-container">
                <div class="login-form">
                    <form method="post" action="/login">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" />
                        </div>
                        <div className='mb-3'>
                            <input type='submit' className='btn btn-primary l-btn' value='Login'/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
