import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MobileUploader() {
    const [resFromServer, setResFromServer] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const location = urlParams.get('location');

        if (location) {
            sendLocation(location);
        }
    }, []);

    const sendLocation = async (location) => {
        try {
            const response = await fetch('https://smartscanbackend.up.railway.app/api/sendLocationString', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ location }),
            });

            setResFromServer(response);
        } catch (error) {
            console.error('Error sending location:', error);
            toast.error('Error sending location');
        }
    };

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const uploadToServer = async (e) => {
        e.preventDefault();

        if (resFromServer && resFromServer.ok) {
            try {
                if (!selectedFile) {
                    toast.error('Please select a file');
                    return;
                }

                const formData = new FormData();
                formData.append('document-to-upload', selectedFile);

                const response = await fetch('https://smartscanbackend.up.railway.app/api/uploadFromMobile', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    toast.success('File Uploaded');
                } else {
                    const errorData = await response.json();
                    toast.error(errorData.error || 'File upload failed');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
                toast.error('Error uploading file');
            }
        } else {
            console.warn('Response not okay or not received');
        }
    };

    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={uploadToServer}>
                <h4 className='mb-4'>Upload document</h4>
                <input type='file' className='form-control' id='inputGroupFile02' onChange={handleFileInput} />
                <input className='mt-4 btn btn-info' type='submit' value='Upload' />
                <ToastContainer />
            </form>
        </div>
    );
}

export default MobileUploader;