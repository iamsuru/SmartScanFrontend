import React, { useEffect } from 'react'
import path from '../SuryanshShrivastavaResume.pdf'
import InputForm from './InputForm'
import Cookies from 'js-cookie'

const Preview = () => {
    return (
        <div className='col-md-6'>
            <div className="ratio ratio-1x1">
                <iframe src={path} title='Preview Document' allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

function Form() {
    useEffect(() => {
        const cookieValue = Cookies.get('auth-token')
        if (cookieValue) {
            console.log(`Cookie value ${cookieValue}`);
        } else {
            console.log('Cookie not found');
        }
    },[])
    return (
        <>
            <div className='container'>
                {console.warn(localStorage.getItem('token'))}
                <div className='row'>
                    <InputForm />
                    <Preview />
                </div>
            </div>
        </>
    )
}

export default Form