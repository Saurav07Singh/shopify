import React,{useState,useContext} from 'react'
import { writeUserDataInDB,signWithGooglePopup,signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.util'
import { UserContext } from '../../context/User/UserContext'
import FormInput from '../Form-Input/FormInput'
import Button from '../Button/Button'
import "./Sign-in-container.scss"
const SignIn = () => {
    const initalState={
        email:"",
        password:"",
    }
    const [userState,setUserState] = useState(initalState)
    const {email,password} = userState
    const {user} = useContext(UserContext)
   

    function resetInputData(){
        setUserState(initalState)
    }
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
            const resp= await signInAuthWithEmailAndPassword(email,password);
            resetInputData();
           // console.log(resp)
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
        await signWithGooglePopup()
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
            <Button type="button" btnType="google" onClick={handleGoogleClick}>Sign In with Google!</Button>
            </div>
        
        </form>
        
    </div>
  )
}

export default SignIn