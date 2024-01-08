import React from 'react'
import styles from '../Styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from "formik";
import { resetpasswordValidation } from '../helper/validate'

const Reset = () => {

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password:''
    },
    validate: resetpasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
})

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false} ></Toaster>
      <div className="flex justify-center items-center min-h-screen ">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter new password
            </span>
          </div>
          <form className='py-16' onSubmit={formik.handleSubmit} action="">
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='New Password' />
              <input {...formik.getFieldProps('confirm_password')} className={styles.textbox} type="password" placeholder='Confirm Password' />
              <button className={styles.btn} type='submit'>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset
