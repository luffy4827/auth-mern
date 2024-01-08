import React from 'react'
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import styles from '../Styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from "formik";
import { passwordValidate } from '../helper/validate'

const Recovery = () => {

  const formik = useFormik({
    initialValues: {
      password: 'admin@123'
    },
    validate: passwordValidate,
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
            <h4 className='text-5xl font-bold'>Password</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by Connecting With Us
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit} action="">
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={profile} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
              <button className={styles.btn} type='submit'>Login</button>
            </div>
            <div className="text-center py-4">
              <span>Forgot password? <Link className='text-red-500' to="/recovery"> Recover Now</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery

