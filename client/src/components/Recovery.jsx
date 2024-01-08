import React from 'react'
// import { Link } from "react-router-dom";
import styles from '../Styles/Username.module.css'
import { Toaster } from 'react-hot-toast'


const Recovery = () => {

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false} ></Toaster>
      <div className="flex justify-center items-center min-h-screen ">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recover Now</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password.
            </span>
          </div>
          <form className='pt-14' action="">
            <div className="textbox flex flex-col items-center gap-6">

              <span className='py-4 text-sm text-left text-gray-500'>
                Enter 6 digit OTP sent to your email.
              </span>
              <input className={styles.textbox} type="text" placeholder='OTP' />

              <button className={styles.btn} type='submit'>Recover Password</button>
            </div>
            <div className="text-center py-4">
              <span>Can't OTP? <button className='text-red-500'> Resend</button> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery

