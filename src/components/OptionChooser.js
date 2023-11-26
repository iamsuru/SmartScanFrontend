import React from 'react';
import PropTypes from 'prop-types';

function OptionChooser({ handleShowQRCode }) {
  return (
    <div id='optionchooser'>
      <div className="input-group mb-4 ps-5 pe-5">
        <input type="file" className="form-control" id="inputGroupFile02" />
      </div>
      <label>OR</label>
      <div className='ps-5 pe-5 mt-4'>
        <label className='me-5'>Using SmartScan</label>
        <input className=' ms-5 btn btn-info' type='button' value='Show QR Code' onClick={handleShowQRCode} />
      </div>
    </div>
  );
}

OptionChooser.propTypes = {
  handleShowQRCode: PropTypes.func.isRequired,
};

export default OptionChooser;
