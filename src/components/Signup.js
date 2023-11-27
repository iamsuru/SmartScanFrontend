import React from 'react'

function Signup() {

    const [name, setName] = useState('')
    const [email_id, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://smartscanbackend.up.railway.app/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email_id, password })
            })

            const data = await response.json()

            if (response.status === 201) {
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
            else if (response.status === 400 && data.message.includes('E11000 duplicate key error collection')) {
                toast.warn('Email already in use', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else {
                toast.error('Registration failed', {
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
            toast.success(error, {
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
    }

    return (
        <>
            <div className="login-container">
            {console.info('Updated 2')}
                <div className="login-form">
                    <form onSubmit={registerUser}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter Name</label>
                            <input type="name" className="form-control" id="name" name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="email" className="form-label">Enter Email</label>
                            <input type="email" className="form-control" id="email" value={email_id}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="password" className="form-label">Enter Password</label>
                            <input type="password" className="form-control" id="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
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