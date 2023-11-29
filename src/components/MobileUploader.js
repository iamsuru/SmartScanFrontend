import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function MobileUploader() {
    const [resFromServer, setData] = useState('')
    useEffect(() => {
        const sendLocation = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const locationParameter = urlParams.get('location');
            console.log('Location Parameter:', locationParameter);
            const response = await fetch('https://smartscanbackend.up.railway.app/api/sendLocationString', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ locationParameter })
            })

            const data = await response.json()
            setData(data)
        }

        sendLocation()
    }, []);

    toast.success(resFromServer.message)

    return (
        <div className='login-container'>
            <form className='login-form'>
                <h4 className='mb-4'>Upload document</h4>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <input className='mt-4 btn btn-info' type='button' value='Upload' />
                <ToastContainer />
            </form>
        </div>
    );
}

export default MobileUploader;