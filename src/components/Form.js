import React from 'react'
import InputForm from './InputForm'

let filePath = ''
class FetchURL {
    async fetchURL() {
        let seconds = 59;
        var intervalId = setInterval(async () => {
            if (seconds === 0) {
                clearInterval(intervalId)
            }
            else {
                seconds--;
                try {
                    const response = await fetch('https://smartscanbackend.up.railway.app/api/getFilePath')
                    if (response.status === 200) {
                        console.log('File Found')
                        clearInterval(intervalId)
                        const data = await response.json()
                        filePath = data.uploadPath
                    }
                    else if (response.status === 404) {
                        console.log('File not found');
                    }
                    else {
                        console.error('Error checking file existence. Status:', response.status);
                    }
                } catch (error) {
                    console.error('Error checking file existence:', error);
                }
            }
        },1000)
        // const response = await fetch('https://smartscanbackend.up.railway.app/api/getFilePath')
        // if (!response.ok) {
        //     toast.error('Network response was not ok')
        // }
        // const data = await response.json()
        // setFilePath(data.uploadPath)
    }
}

const Preview = () => {
    return (
        <div className='col-md-6'>
            <div className="ratio ratio-1x1">
                <iframe src={filePath} title='Preview Document' allowFullScreen={true}></iframe>
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

export { FetchURL, Form }