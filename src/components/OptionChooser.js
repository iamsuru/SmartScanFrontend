import React from 'react'

function OptionChooser() {
    return (
        <>
            <div className="input-group mb-4 ps-5 pe-5">
                <input type="file" className="form-control" id="inputGroupFile02" />
            </div>
            <label>OR</label>
            <div className='ps-5 pe-5 mt-4'>
                <label className='me-5'>Using SmartScan</label>
                <input className=' ms-5 btn btn-info' type='button' value='Show QR Code' />
            </div>
        </>
    )
}

export default OptionChooser