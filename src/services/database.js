import axios from "axios"
import {firestore} from "./firebase"
const saveToDatabase=(data)=>
{
    return firestore.collection("courses").add(data)
}
const fetchCourses=()=>{
    return firestore.collection("courses").get()
}
const fetchCourseById=(id)=>{
    return firestore.collection("courses").doc(id).get()
}
const updateCourse=(id,payload)=>
{
    return firestore.collection("courses").doc(id).update({
        title:payload.title,
        description:payload.description,
        listTerms:payload.listTerms
    })
}
export {saveToDatabase,fetchCourses,fetchCourseById,updateCourse}