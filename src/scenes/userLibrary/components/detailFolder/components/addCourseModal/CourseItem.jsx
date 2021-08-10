import React from 'react'
import { FaTimes, FaPlus,FaMinus } from "react-icons/fa"
import { updateCourses } from "../../../../../../services/database"
function CourseItem({ folder, course }) {
    function handleAddCourse() {
        updateCourses(folder.id, course.id)
    }
    return (
        <div className="course-item">
            <p className="title">{course.data().title}</p>
            {
                folder.data().courses.includes(course.id)
                    ? <div className="button added" onClick={() => handleAddCourse()}>
                        <FaMinus></FaMinus>
                    </div>
                    : <div className="button" onClick={() => handleAddCourse()}>
                        <FaPlus></FaPlus>
                    </div>
            }

        </div>
    )
}

export default CourseItem
