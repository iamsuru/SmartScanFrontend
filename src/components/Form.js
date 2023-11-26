import React from 'react'
import path from '../SuryanshShrivastavaResume.pdf'
import InputForm from './InputForm'

const Preview = () => {
    return (
        <div className='col-md-6'>
            <div className="ratio ratio-1x1">
                <iframe src='' title='Preview Document' allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

function Form() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <InputForm />
                    <Preview />
                </div>
            </div>
        </>
    )
}

export default Form