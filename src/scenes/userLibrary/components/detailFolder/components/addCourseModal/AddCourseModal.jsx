import React, { useState,useEffect } from 'react'
import { Container, WrapContent } from "./style"
import { FaTimes, FaPlus } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import { createFolder,fetchCourses } from "../../../../../../services/database"
import CourseItem from './CourseItem'
import {firestore,auth} from "../../../../../../services/firebase"
function AddCourseModal({setToggleAddCourseModal,folder }) {
    const history = useHistory()
    const [input, setInput] = useState({
        title: "",
        description: ""
    })
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetchCourses().then(res=>{
            console.log(res.docs)
            setCourses(res.docs)
        })
        // firestore.collection("courses").where("userID", "==", auth.currentUser.uid).get().then(res=>{
        //     setCourses(res.docs)
        // })
    },[])
    function handleInput(e) {
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        createFolder(input)
    }
    return (
        <Container>
            <WrapContent>
                <div className="header">
                    Thêm học phần
                    <div onClick={()=>setToggleAddCourseModal(false)}>
                        <FaTimes></FaTimes>
                    </div>
                </div>
                <div className="content">
                    <div className="create-course">
                        <p>
                            <FaPlus></FaPlus>TẠO HỌC PHẦN MỚI
                        </p>
                    </div>
                    <select name="" id="" className="custom-select w-50 my-3">
                        <option value="">Học phần của bạn</option>
                        <option value="">Học phần của lớp</option>
                        <option value="">Học phần của đã học</option>
                    </select>
                    <div className="list-courses">
                        {
                            courses.map(item=>{
                               return  <CourseItem course={item} folder={folder}></CourseItem>
                            })
                        }
                        {/* <div className="course-item">
                            <p className="title">eworu</p>
                            <div className="button">
                                <FaPlus></FaPlus>
                            </div>
                        </div> */}
                    </div>
                </div>

            </WrapContent>
        </Container>
    )
}

export default AddCourseModal
