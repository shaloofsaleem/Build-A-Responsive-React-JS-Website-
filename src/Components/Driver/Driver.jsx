import React from 'react'
import './driver.css'
import imgD from '../../Assets/images/drive.png'

function Driver() {
  return (
    <div className="driver">
        <div className="left">
            <img src={imgD} alt="" />
        </div>
        <div>
            <h2>Find Your Prefect Car <span>to try before you buy</span></h2>
            <p>Make sure your future wheels works well with your lifestyle by taking your time in the driver's seat. </p>
            <button>Browser Cars</button>
        </div>
    </div>
  )
}

export default Driver
