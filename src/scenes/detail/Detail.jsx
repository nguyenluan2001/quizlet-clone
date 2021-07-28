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
import TermItem from './components/termItem/TermItem'
import Learn from '../learn/Learn'
function Detail({}) {
    const { id, type } = useParams()
    let scene = null
    const [course, setCourse] = useState({})
    useEffect(async () => {
        let fetchCourse = await fetchCourseById(id)
        setCourse(fetchCourse.data())
    }, [])
    switch (type) {
        case "flashcards": {
            scene=<FlashCard></FlashCard>
            break
        }
        case "write":
            {
                scene=<Write></Write>
                break
            }
        case "learn":
            {
                scene=<Learn></Learn>
                break
            }
        default:
            {
                scene = null
            }
    }
    console.log(scene)
    return (
      <>
      {scene==null?  <Container>
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
                            <Link>
                                <FaFileAlt></FaFileAlt>
                                Kiểm tra
                            </Link>
                        </li>
                    </LeftContent>
                    <RightContent>
                        <Slide></Slide>
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
                                <FaPen></FaPen>
                            </li>
                            <li>
                                <FaInfo></FaInfo>
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
                    <h4>Thuật ngữ trong học phần này (2)</h4>
                    <div className="learning">
                        <div>
                            <h4>Đang học(2)</h4>
                            <p>Bạn đã bắt đầu học những thuật ngữ này. Tiếp tục phát huy nhé!</p>

                        </div>
                        <div className="choose-btn">Chọn 2</div>
                    </div>
                    {
                        course.listTerms&&course?.listTerms.map(item=>{
                            return <TermItem term={item}></TermItem>

                        })
                    }
                </TermInfo>
                    <Link className="edit-btn" to={`/${id}/edit`}>Thêm hoặc xóa thuật ngữ</Link>
            </WrapTermInfo>
        </Container>:scene}
      </>
    )
}

export default Detail
