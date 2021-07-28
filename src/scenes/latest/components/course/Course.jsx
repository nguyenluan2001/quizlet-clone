import React from 'react'
import { Container } from "./style"
import { FaLock } from "react-icons/fa"
import {auth} from "../../../../services/firebase"
function Course({ course }) {
    return (
        <Container to={`/${course.id}/detail`}>
            <p className="title">{course.data().title}</p>
            <p className="num-terms">
                {course.data().listTerms.length} thuật ngữ
                <FaLock></FaLock>
            </p>
            <div className="user">
                <div className="avatar">
                    <img src="https://assets.quizlet.com/a/j/dist/i/animals/14.3d9afcb8dbe2d77.jpg" alt="" />
                </div>
                <span>{auth.currentUser.displayName}</span>
            </div>
        </Container>
    )
}

export default Course
