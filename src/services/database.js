import axios from "axios"
import {firestore} from "./firebase"
import {firebase} from "./firebase"
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
const updateStartCourse=async (courseId,termId)=>{
    let course=  await firestore.collection("courses").doc(courseId).get()
    console.log(course.data())

    if(course.data().setStars.includes(termId))
    {
        return firestore.collection("courses").doc(courseId).update({
           "setStars":firebase.firestore.FieldValue.arrayRemove(termId)
       })
    }
    else
    {

        return firestore.collection("courses").doc(courseId).update({
            "setStars":firebase.firestore.FieldValue.arrayUnion(termId)
        })
    }
}
export {saveToDatabase,fetchCourses,fetchCourseById,updateCourse,updateStartCourse}