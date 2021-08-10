import React,{useState,useEffect} from 'react'
import FolderItem from './FolderItem'
import {fetchFolders} from "../../../../services/database"
import {firestore,auth} from "../../../../services/firebase"
function Folder() {
    const [folders,setFolders]=useState([])
    useEffect(()=>{
        // fetchFolders().then(res=>{
        //     setFolders(res.docs)
        //     console.log(res.docs)
        // })
        firestore.collection("folders").where("userID","==",auth.currentUser.uid).onSnapshot(snap=>{
            setFolders(snap.docs)
        })
    },[])
    return (
        <div>
            {
                folders?.map(item=>{
                    return <FolderItem folder={item}></FolderItem>
                })
            }
            
        </div>
    )
}

export default Folder
