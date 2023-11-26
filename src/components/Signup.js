import React from 'react'

function Signup() {
    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <form method="post" action="/signup">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter Name</label>
                            <input type="name" className="form-control" id="name" name='name'/>
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="email" className="form-label">Enter Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="password" className="form-label">Enter Password</label>
                            <input type="password" className="form-control" id="password" />
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