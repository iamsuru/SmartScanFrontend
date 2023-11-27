import React, { useState } from 'react'
import ModalChooser from './ModalChooser';

const InputForm = () => {
    const [modal, setModal] = useState(false);

    const [name, setName] = useState('')
    const [email_id, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const toggle = () => setModal(!modal);
    return (
        <div className='col-md-6 details'>
            <div className='container'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" value={email_id} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile_number" className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" id="mobile_number" />
                    </div>
                    <div className='mt-4'>
                        <label style={{ marginRight: '50px' }}>Gender</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Other
                            </label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor='uploadFile' className="form-label me-5">Document</label>
                        <input className='ms-5 btn btn-info
                        ' type="button" value="Upload" id="uploadFile" onClick={toggle}></input>
                    </div>
                    <div className='mt-4 mb-5'>
                        <input className='btn btn-success form-btn' type='submit' />
                    </div>
                </form>
            </div>
            <ModalChooser modal={modal} toggle={toggle} />
        </div>
    )
}

export default InputForm