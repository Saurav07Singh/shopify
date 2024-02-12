import React,{useState} from 'react'
import { createAuthUserWithEmailandPassword,writeUserDataInDB } from '../../utils/firebase/firebase.util'
import FormInput from '../Form-Input/FormInput'
import "./Sign-up-container.scss"
import Button from '../Button/Button'
const SignUp = () => {
    const [userState,setUserState] = useState({
        username:"",
        email:"",
        password:"",
        cpassword:""
    })
    const {username,email,password,cpassword} = userState


    function handleChange(e){
        const {name,value}=e.target
        setUserState(prev=>({...prev,[name]:value}))

    }
   async function handleSubmit(e){
        e.preventDefault();
        if(username==="" || password==="" || email==="") return;
        if(password!==cpassword) {
            alert("Password should match!")
            return;
        
        }
        try{
            const {user}= await createAuthUserWithEmailandPassword(email,password)
            const res= await writeUserDataInDB(user);
            console.log(res)
        }catch(err){
           switch(err.code){
            case 'auth/email-already-in-use':{
                alert("User already have an account with this email")
                break;
            }
            default : console.log(err.message);
           }
        }
    }
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account!</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
           
            <FormInput label="Username" type='text' name="username" value={username} onChange={handleChange} />

           
            <FormInput label="Email" type='email' name="email" value={email} onChange={handleChange} />

           
            <FormInput label="Password" type='password' name="password" value={password} onChange={handleChange}/>

           
            <FormInput label="Comfirm Password" type='password' name="cpassword" value={cpassword} onChange={handleChange} />

            <Button >Submit</Button>
        </form>
    </div>
  )
}

export default SignUp