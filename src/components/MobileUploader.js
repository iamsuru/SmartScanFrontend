import React from 'react'
import { ToastContainer, toast } from 'react-toastify'


function MobileUploader() {
    const sendToServer = () =>{
        toast.success('Uploaded Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className='login-container'>
            <div className='login-form'>
                <h4 className='mb-4'>Upload document</h4>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <input className='mt-4 btn btn-info' type='button' value='Upload' onClick={sendToServer}/>
                <ToastContainer/>
            </div>
        </div>
    )
}

export default MobileUploader