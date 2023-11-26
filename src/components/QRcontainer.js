import { QRCodeSVG } from 'qrcode.react'
import React from 'react'

function QRcontainer(props) {
  return (
    <>
        <QRCodeSVG value={props.uniqueCode}/>
    </>
  )
}

export default QRcontainer