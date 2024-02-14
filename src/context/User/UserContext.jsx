import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedLinstener,writeUserDataInDB,userSignOut} from '../../utils/firebase/firebase.util'

export const UserContext = createContext({
    user:null,
    setUser:()=>null
})

//userSignOut();
export const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const value={user,setUser}

    useEffect(()=>{
        const unsubscribe=onAuthStateChangedLinstener((user)=>{
            console.log(user)
            setUser(user)
            if(user)
            writeUserDataInDB(user)
        })


        return unsubscribe
    },[])


    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}