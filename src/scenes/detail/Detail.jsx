import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import FlashCard from '../flash-cards/FlashCard'
import Write from '../write/Write'
import { Link } from "react-router-dom"
import {
    Container,
    CourseInfo,
    RightContent,
    LeftContent,
    LearnArea,
    WrapTermInfo, TermInfo,
    WrapCourseInfo

} from "./style"
import { fetchCourseById } from "../../services/database"
import {
    FaClone,
    FaUndoAlt,
    FaPen,
    FaVolumeUp,
    FaFileAlt,
    FaPlus,
    FaInfo,
    FaEllipsisH

} from "react-icons/fa"
import Slide from './components/slide/Slide'
import TermItem from '../../components/termItem/TermItem'
import Learn from '../learn/Learn'
import Test from '../test/Test'
import { firestore } from '../../services/firebase'
function Detail({ }) {
    const { id, type } = useParams()
    let scene = null
    const [course, setCourse] = useState({})
    const [tempCourse, setTempCourse] = useState({})
    const [toggleShowTerm,setToggleShowTerm]=useState("all")
    useEffect(() => {
        firestore.collection("courses").doc(id).onSnapshot(snap => {
            setCourse(snap.data())
            setTempCourse(snap.data())
           
        })
        // let fetchCourse = await fetchCourseById(id)
        // setCourse(fetchCourse.data())
    }, [])
    useEffect(()=>{
        if(toggleShowTerm=="star"&&tempCourse.setStars.length>0)
        {
            console.log("star")
            let listStars=tempCourse.listTerms.filter(item=>tempCourse.setStars.includes(item.id))
            console.log(listStars)
            setCourse(pre=>{
                return {...pre,listTerms:listStars}
            })
            setToggleShowTerm("star")
        }
        else
        {
            setCourse(tempCourse)
            setToggleShowTerm("all")
        }
    },[tempCourse])
    switch (type) {
        case "flashcards": {
            scene = <FlashCard></FlashCard>
            break
        }
        case "write":
            {
                scene = <Write></Write>
                break
            }
        case "learn":
            {
                scene = <Learn></Learn>
                break
            }
        case "test":
            {
                scene = <Test></Test>
                break
            }
        default:
            {
                scene = null
            }
    }
    function handleShowTerms(type)
    {
        if(type=="all")
        {
            setCourse(tempCourse)
            setToggleShowTerm("all")
        }
        else
        {
            let listStars=tempCourse.listTerms.filter(item=>tempCourse.setStars.includes(item.id))
            console.log(listStars)
            setCourse(pre=>{
                return {...pre,listTerms:listStars}
            })
            setToggleShowTerm("star")

        }
    }
    return (
        <>
            {scene == null ? <Container>
                <WrapCourseInfo>

                    <p className="title">{course.title}</p>
                    <LearnArea>
                        <LeftContent>
                            <p>Học</p>
                            <li>
                                <Link>
                                    <FaClone></FaClone>
                                    Thẻ ghi nhớ
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${id}/learn`}>
                                    <FaUndoAlt></FaUndoAlt>
                                    Học
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${id}/write`}>
                                    <FaPen></FaPen>
                                    Viết
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaVolumeUp></FaVolumeUp>
                                    Chính tả
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${id}/test`}>
                                    <FaFileAlt></FaFileAlt>
                                    Kiểm tra
                                </Link>
                            </li>
                        </LeftContent>
                        <RightContent>
                            <Slide terms={course.listTerms}></Slide>
                        </RightContent>
                    </LearnArea>
                    <CourseInfo>
                        <div className="top-content">
                            <div className="user">
                                <img src="https://assets.quizlet.com/a/j/dist/i/animals/14.3d9afcb8dbe2d77.jpg" alt="" />
                                <div className="user-name">
                                    <p>Tạo bởi</p>
                                    <p>luannguyen</p>
                                </div>
                            </div>
                            <ul className="actions">
                                <li>
                                    <FaPlus></FaPlus>
                                </li>
                                <li>
                                    <Link to={`/${id}/edit`}>
                                        <FaPen></FaPen>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <FaInfo></FaInfo>
                                    </Link>
                                </li>
                                <li>
                                    <FaEllipsisH></FaEllipsisH>
                                </li>
                            </ul>
                        </div>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ad.
                        </p>
                    </CourseInfo>
                </WrapCourseInfo>
                <WrapTermInfo>
                    <TermInfo>
                        <div className="d-flex justify-content-between mb-3">
                            <h4>Thuật ngữ trong học phần này (2)</h4>
                            {
                                tempCourse.setStars?.length ?<div className="switch-start">
                                    <div className={toggleShowTerm=="all"&&"active"} onClick={()=>handleShowTerms("all")}>Tất cả</div>
                                    <div className={toggleShowTerm=="star"&&"active"} onClick={()=>handleShowTerms("star")}>Gắn dấu sao ({tempCourse.setStars?.length})</div>
                                </div> : ""
                            }
                        </div>
                        <div className="learning">
                            <div>
                                <h4>Đang học(2)</h4>
                                <p>Bạn đã bắt đầu học những thuật ngữ này. Tiếp tục phát huy nhé!</p>

                            </div>

                            <div className="choose-btn">Chọn 2</div>
                        </div>
                        {
                            course.listTerms && course?.listTerms.map(item => {
                                return <TermItem term={item} setStars={tempCourse.setStars}></TermItem>

                            })
                        }
                    </TermInfo>
                    <Link className="edit-btn" to={`/${id}/edit`}>Thêm hoặc xóa thuật ngữ</Link>
                </WrapTermInfo>
            </Container> : scene}
        </>
    )
}

export default Detail
