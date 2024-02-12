import React from 'react'
import { signWithGooglePopup,writeUserDataInDB } from '../../utils/firebase/firebase.util'
import SignUp from '../../Components/Sign-Up/SignUp'
import SignIn from '../../Components/Sign-In/SignIn'
import "./authentication.styles.scss"

const Authentication = () => {
  return (
    <>
    <div className='authentication-container'>
    <SignUp />
    <SignIn />
    </div>
    </>
  )
}

export default Authentication