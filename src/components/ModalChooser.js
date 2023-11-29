import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import QRcontainer from './QRcontainer';
import OptionChooser from './OptionChooser';

function ModalChooser(props) {
  const generateUniqueID = () => {
    let key = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length
    for (var i = 0; i < 6; i++) {
      key += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return key;
  }

  const { className, modal, toggle } = props;
  const [showQRCode, setShowQRCode] = useState(false)
  const [uniqueCode, setUniqueCode] = useState('')


  const handleShowQRCode = () => {
    setShowQRCode(true)
  }

  const handleCancel = () => {
    setShowQRCode(false)
    toggle()
  }

  useEffect(() => {
    if (modal) {
      const uniqueCode = generateUniqueID()
      setUniqueCode(uniqueCode)
    }
  }, [modal])



  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className={`modal-dialog-centered ${className}`}
    >
      <ModalHeader toggle={handleCancel}>Choose Option</ModalHeader>
      <ModalBody className='text-center'>
        {showQRCode ? (
          <QRcontainer uniqueCode={uniqueCode} onTimerComplete={handleCancel} />
        ) : (
          <OptionChooser handleShowQRCode={handleShowQRCode} />
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

ModalChooser.propTypes = {
  className: PropTypes.string,
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ModalChooser;
