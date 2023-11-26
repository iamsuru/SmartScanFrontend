import React from 'react'

function Signup() {
    return (
        <>
            <div class="login-container">
                <div class="login-form">
                    <form method="post" action="/signup">
                        <div class="mb-3">
                            <label for="name" class="form-label">Enter Name</label>
                            <input type="name" class="form-control" id="name" name='name'/>
                        </div>
                        <div class="mb-3 mt-4">
                            <label for="email" class="form-label">Enter Email</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="mb-3 mt-4">
                            <label for="password" class="form-label">Enter Password</label>
                            <input type="password" class="form-control" id="password" />
                        </div>
                        <div className='mb-3 mt-4'>
                            <input type='submit' className='btn btn-primary l-btn' value='Signup' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup