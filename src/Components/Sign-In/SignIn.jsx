import React,{useState} from 'react'
import { createAuthUserWithEmailandPassword,writeUserDataInDB,signWithGooglePopup,signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.util'
import FormInput from '../Form-Input/FormInput'
import Button from '../Button/Button'
import "./Sign-in-container.scss"
const SignIn = () => {
    const [userState,setUserState] = useState({
        email:"",
        password:"",
    })
    const {email,password} = userState

    function handleChange(e){
        const {name,value}=e.target
        setUserState(prev=>({...prev,[name]:value}))

    }
   async function handleSubmit(e){
        e.preventDefault();
         if( password==="" || email==="") {
            alert("please enter email and password to proceed!")
            return;
            }
        try{
            const resp= await signInAuthWithEmailAndPassword(email,password)
            console.log(resp)
        }
        catch(err){
            switch(err.code){
                case 'auth/invalid-credential':{
                    alert("Wrong email or password!")
                    break;
                }
                default : console.log(err)
               }
        } 
    }

    async function handleGoogleClick(){
        console.log("hello")
        const {user}= await signWithGooglePopup()
        const docRef=writeUserDataInDB(user)
       }
  return (
    <div className='sign-up-container'>
        <h2>Already have an account!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
           
            <FormInput label="Email" type='text' name="email" value={email} onChange={handleChange} />

           
            <FormInput label="Password" type='text' name="password" value={password} onChange={handleChange}/>

           <div className='button-container'> 
            <Button type="submit" onClick={handleChange}>Submit</Button>
            <Button btnType="google" onClick={handleGoogleClick}>Sign In with Google!</Button>
            </div>
        
        </form>
        
    </div>
  )
}

export default SignIn