import { QRCodeSVG } from 'qrcode.react';
import React, { useState, useEffect } from 'react';
import { Progress } from 'reactstrap';

function QRcontainer(props) {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const countdown = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [seconds]);

  useEffect(() => {
    if (seconds === 0 && props.onTimerComplete) {
      props.onTimerComplete();
    }
  }, [seconds, props]);
  const progressValue = seconds > 0 ? (seconds / 60) * 100 : 0;

  return (
    <>
      <QRCodeSVG className='mt-5' value={`https://smartscanmern.netlify.app/upload?${props.uniqueCode}`} />
      <div className='ms-5 me-5 mt-5 mb-5 ps-5 pe-5'>
        <label style={{color:'blue'}}>Remaining Time: {`${seconds} seconds`}</label>
        <Progress animated className="my-3" color="info" value={progressValue}></Progress>
        <a href={`http://localhost:3000/upload?location=${props.uniqueCode}`} rel='noreferrer noopener' target='_blank'>Link</a>
      </div>
    </>
  );
}

export default QRcontainer;
