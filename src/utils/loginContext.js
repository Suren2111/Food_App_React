import {createContext} from "react"

const loginContext=createContext({
    userInfo:"Default User-context",
    setName: () => {} 
})

export default loginContext;