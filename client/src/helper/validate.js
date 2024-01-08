import toast from 'react-hot-toast'

// validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({}, values)
    return errors;
}

// validate login page password
export async function passwordValidate(values){
    const errors = passwordVerify({}, values)
    return errors;
}

// validate reset password
export async function resetpasswordValidation(values){
    const errors = passwordVerify({}, values)
    if(values.password !== values.confirm_password){
        errors.exist = toast.error("Password not match")
    }
    return errors;
}

// validate password
function passwordVerify(errors ={} , values) {

    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

    if (!values.password){
        errors.password = toast.error("Password is required.")
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Password cannot contain spaces.");
    } else if(values.password.length < 4){
        errors.password= toast.error('Password must contain at least 4 characters')
    } else if(!specialChars.test(values.password)){
        errors.password = toast.error('Password must contain at least one special character');
    }
    return errors
}


// validate username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username is required.");
  } else if(values.username.includes(" ")){
    error.username = toast.error("Username cannot contain spaces.")
  }
  return error;
}
