import React, { useState, useEffect } from 'react'
import Input from './components/inputForm/Input'
import TermItem from './components/termItem/TermItem'
import { CourseInfo, Container, AddTerm, ListTerms, StickyHeader } from "./style"
import { FaPlus } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { addTerm, updateCourseInfo, setCourse, resetCreateSet } from "../../services/slices/createSetSlice"
import { useContext } from "react"
import { AuthContext } from "../../services/authContext"
import { saveToDatabase, updateCourse } from "../../services/database"
import { auth } from "../../services/firebase"
import { useHistory, useParams } from "react-router-dom"
import { fetchCourseById } from "../../services/database"
function CreateSet({ props }) {
    const createSet = useSelector(state => state.createSet)
    const dispatch = useDispatch()
    const history = useHistory()
    const [input, setInput] = useState({
        title: "",
        description: ""
    })
    const [stickyHeader, setStickyHeader] = useState(false)
    const authContext = useContext(AuthContext)
    const { id } = useParams()
    function handleInput(e) {
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    function handleDone() {
        let data = { ...createSet }
        data.userID = auth.currentUser.uid
        saveToDatabase(data).then(() => {
            history.push("/latest")
        })
    }
    async function handleEdit() {
        await updateCourse(id, createSet)
        console.log(createSet)
        history.push(`/${id}/detail`)
    }
    useEffect(() => {
        dispatch(resetCreateSet())
        setInput({
            title: "",
            description: ""
        })
        console.log("render")
    }, [])
    useEffect(async () => {
        if (id) {
            let course = await fetchCourseById(id)
            dispatch(setCourse(course.data()))
            let title = course.data().title
            let description = course.data().description
            setInput({ title, description })
        }
    }, [id])
    useEffect(() => {
        dispatch(updateCourseInfo(input))
    }, [input])
  
    console.log(createSet)
    console.log(props)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50 ) {
                setStickyHeader(true)
            }
            else {
                setStickyHeader(false)
            }
        })
    })
    return (
        <Container>
            {stickyHeader && <StickyHeader>
                <p className="title">Tạo học phần mới</p>
                <div className="done-btn">
                    <button>Tạo</button>
                </div>

            </StickyHeader>}
            <CourseInfo>
                {!stickyHeader && <div className="top-course-info">
                    <h3>Tạo học phần mới</h3>
                    <div className="done-btn-sm">
                        <button>Tạo</button>
                    </div>
                </div>}
                <div className="title">
                    <input type="text" name="title" value={input.title} onChange={(e) => handleInput(e)} />
                    <label htmlFor="">TIÊU ĐỀ</label>
                </div>
                <div className="description">
                    <input type="text" name="description" value={input.description} onChange={(e) => handleInput(e)} />
                    <label htmlFor="">MÔ TẢ</label>
                </div>
            </CourseInfo>
            <ListTerms>
                {
                    createSet.listTerms.map((item, index) => {
                        return <TermItem key={item.id} index={index} term={item}></TermItem>
                    })
                }

                <AddTerm onClick={() => dispatch(addTerm())}>
                    <span className="wrapper">
                        <FaPlus></FaPlus>
                        <span>THÊM THẺ</span>
                    </span>
                </AddTerm>
                {id ?
                    <div className="done-btn">
                        <button onClick={() => handleEdit()}>Hoàn tất</button>
                    </div> :
                    <div className="done-btn">
                        <button onClick={() => handleDone()}>Tạo</button>
                    </div>}
            </ListTerms>
        </Container>
    )
}

export default CreateSet
