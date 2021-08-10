import axios from "axios"
import { firestore, auth } from "./firebase"
import { firebase } from "./firebase"
// ======= Courses ============
const saveToDatabase = (data) => {
    return firestore.collection("courses").add(data)
}
const fetchCourses = () => {
    return firestore.collection("courses").where("userID", "==", auth.currentUser.uid).get()
}
const fetchCourseById = (id) => {
    return firestore.collection("courses").doc(id).get()
}
const updateCourse = (id, payload) => {
    return firestore.collection("courses").doc(id).update({
        title: payload.title,
        description: payload.description,
        listTerms: payload.listTerms
    })
}
const updateStarCourse = async (courseId, termId=null) => {
    let course = await firestore.collection("courses").doc(courseId).get()
    console.log(course.data())
    if(termId!=null)
    {
        if (course.data().setStars) {
            if (course.data().setStars.includes(termId)) {
                return firestore.collection("courses").doc(courseId).update({
                    "setStars": firebase.firestore.FieldValue.arrayRemove(termId)
                })
            }
            else {
    
                return firestore.collection("courses").doc(courseId).update({
                    "setStars": firebase.firestore.FieldValue.arrayUnion(termId)
                })
            }
        }
        else
        {
            return firestore.collection("courses").doc(courseId).update({
                "setStars": firebase.firestore.FieldValue.arrayUnion(termId)
            })
        }
    }
    else
    {
        if(course.data().setStars.length==course.data().listTerms.length)
        {
            return firestore.collection("courses").doc(courseId).update({
                "setStars": []
            })
        }
        let termIds=course.data().listTerms.map(item=>item.id)
        return firestore.collection("courses").doc(courseId).update({
            "setStars": termIds
        })
    }
}
const deleteCourse=(courseId)=>{
    return firestore.collection("courses").doc(courseId).delete()
}

// =========== Folders ===============
const createFolder=(input)=>{
    return firestore.collection("folders").add({...input,courses:[],userID:auth.currentUser.uid})
}
const fetchFolders=()=>{
    return firestore.collection("folders").get()
}
const fetchFolderById=(folderId)=>{
    return firestore.collection("folders").doc(folderId).get()
}
const updateCourses=async (folderId,courseId)=>{
    const folder=await firestore.collection("folders").doc(folderId).get()
    if(folder.data().courses.includes(courseId))
    {
        return firestore.collection("folders").doc(folderId).update({
            'courses':firebase.firestore.FieldValue.arrayRemove(courseId)
        })

    }
    else
    {
        return firestore.collection("folders").doc(folderId).update({
            'courses':firebase.firestore.FieldValue.arrayUnion(courseId)
        })
    }
}
const updateFolder=async (folderId,input)=>{
    return firestore.collection("folders").doc(folderId).update({
        title:input.title,
        description:input.description
    })
}
const deleteFolder=(folderId)=>{
    return firestore.collection("folders").doc(folderId).delete()
}
export { saveToDatabase, fetchCourses,
     fetchCourseById, updateCourse,
      updateStarCourse,deleteCourse,
      createFolder,fetchFolderById,fetchFolders,
      updateCourses,updateFolder,deleteFolder
     }