import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MobileUploader() {
    // const [resFromServer, setData] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const location = urlParams.get('location')
        console.log(location);
        if (location) {
            sendLocation(location)
        }
    }, [])


    const sendLocation = async (location) => {
        try {
            const response = await fetch('https://smartscanbackend.up.railway.app/api/sendLocationString', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ location })
            })
            console.warn(location);
            const data = await response.json()
            console.info(data.message)
            // setData(data)
        }
        catch (error) {
            console.error('Error sending location:', error);
            toast.error('Error sending location');
        }
    }

    // if (resFromServer && resFromServer.message) {
    //     toast.success(resFromServer.message);
    // }

    // useEffect(() => {
    //     const sendLocation = async () => {
    //         const urlParams = new URLSearchParams(window.location.search);
    //         const locationParameter = urlParams.get('location');
    //         console.log('Location Parameter:', locationParameter);

    //         try {
    //             const response = await fetch('https://smartscanbackend.up.railway.app/api/sendLocationString', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ locationParameter }),
    //             });

    //             const data = await response.json();
    //             setData(data);
    //         } catch (error) {
    //             console.error('Error sending location:', error);
    //             toast.error('Error sending location');
    //         }
    //     };

    //     sendLocation();
    // }, []);

    // if (resFromServer && resFromServer.message) {
    //     toast.success(resFromServer.message);
    // }

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