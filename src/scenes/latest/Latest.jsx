import React,{useEffect,useState} from 'react'
import { fetchCourses } from '../../services/database'
import {auth} from "../../services/firebase"
import Course from './components/course/Course'
import { ListCourses,Container } from './style'
function Latest() {
    console.log(auth.currentUser)
    const [courses,setCourses]=useState([])
    useEffect(async()=>{
        let courses=await fetchCourses()
    //     let newCourses=courses.docs.map(item=>{
    //       return item.data()
    //   })
        setCourses(courses.docs)
    },[])
    return (
        <Container>
            <ListCourses>
            {courses.map(item=>{
                return <Course course={item}></Course>
            })}

            </ListCourses>
        </Container>
    )
}

export default Latest
