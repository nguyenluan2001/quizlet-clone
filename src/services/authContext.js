import React,{useContext} from "react"
import { useHistory,withRouter } from "react-router-dom"
import { auth, firestore } from "../services/firebase"
const AuthContext = React.createContext()

const useAuth = () => {
    return useContext(AuthContext)
}
const AuthProvider = ({ children }) => {
    const history=useHistory()
    function register(birthday, email, username, password) {
        return auth.createUserWithEmailAndPassword(email, password).then((user) => {
            firestore.collection("users").doc(user.uid).set({
                birdthday: birthday,
                email: email,
                username: username,
            })
         user.user.updateProfile({
             displayName:username
         })
        console.log("user",user.user)

        })
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then(()=>{
            history.push("/latest")
        })
    }
    function logout()
    {
        return auth.signOut().then(()=>{
            history.push("/vi")
        })
    }
    let value = {
        register,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    )
}
export { AuthContext, useAuth }
export default withRouter(AuthProvider)