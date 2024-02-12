import {initializeApp} from "firebase/app"

import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {getDoc,setDoc,getFirestore,doc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAljVad9eoyRag9FpDr22iB8Sso1cKU-FY",
    authDomain: "crown-db-3ae53.firebaseapp.com",
    projectId: "crown-db-3ae53",
    storageBucket: "crown-db-3ae53.appspot.com",
    messagingSenderId: "621588433449",
    appId: "1:621588433449:web:a2f75da68b5f9b84cf6a38"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db= getFirestore();

  const googleProvider= new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  })



  export const writeUserDataInDB= async (userAuth)=>{
    const instance= doc(db,"users",userAuth.uid)
    console.log(instance)
    const docSnapShot= await getDoc(instance);
    // console.log(docSnapShot.exists())
    if(!docSnapShot.exists()){
      try{
        const {displayName,email  } = userAuth
        const date = new Date();
        await setDoc(instance,{
            displayName,
            email,
            date
        })
      
      }catch(err){
        console.error(err.message)
      }
    }
    else
      return instance
  }

 export const auth = getAuth(app);
 export const signWithGooglePopup = ()=>signInWithPopup(auth,googleProvider)

 export const createAuthUserWithEmailandPassword= async (email,password)=>{
  return await  createUserWithEmailAndPassword(auth,email,password)
 }
export const signInAuthWithEmailAndPassword = async(email,password)=>{
  return await signInWithEmailAndPassword(auth,email,password)
}
