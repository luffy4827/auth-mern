import React, { useState } from 'react'
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import styles from '../Styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from "formik";
import { passwordValidate } from '../helper/validate'
import convertToBase64 from '../helper/convert'

const Register = () => {

  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: 'admin123@gmail.com',
      username: 'admin123',
      password: 'admin@123'
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values =await Object.assign(values, {profile:file || ''})
      console.log(values);
    }
})

// formik does not support file upload so we need to create this handler
const onUpload = async e => {
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64)
}

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false} ></Toaster>
      <div className="flex justify-center items-center min-h-screen ">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by Connecting With Us
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit} action="">
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
              <img className={styles.profile_img} src={file || profile} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id='profile' name='profile' />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Email*' />
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
              <button className={styles.btn} type='submit'>Register</button>
            </div>
            <div className="text-center py-4">
              <span>Already have an account? <Link className='text-red-500' to="/login"> Login Now</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
