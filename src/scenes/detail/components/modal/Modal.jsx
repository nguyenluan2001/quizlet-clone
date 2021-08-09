import React from 'react'
import { Container, WrapContent } from "./style"
import { FaTimes } from "react-icons/fa"
import {deleteCourse} from "../../../../services/database"
import {useHistory} from "react-router-dom"
function Modal({courseId,setToggleModalDelete}) {
    const history=useHistory()
     function handleDelete()
    {
         deleteCourse(courseId)
        history.push("/latest")

    }
    return (
        <Container>
            <WrapContent>
                <div className="header">
                    Xóa học phần này
                    <div onClick={()=>setToggleModalDelete(false)} >
                        <FaTimes></FaTimes>
                    </div>
                </div>
                <div className="content">
                    <h4>coúe</h4>
                    <p>Bạn sắp xoá học phần này và toàn
                        bộ dữ liệu trong đó. Không ai có
                        thể truy cập vào học phần này nữa.</p>
                    <strong>Bạn có chắc chắn không? Bạn sẽ không được hoàn tác.</strong>
                    <div className="buttons">
                        <button className="cancel" onClick={()=>setToggleModalDelete(false)}>Hủy</button>
                        <button className="agree" onClick={()=>handleDelete()}>Vâng, hãy xóa học phần</button>
                    </div>
                </div>

            </WrapContent>
        </Container>
    )
}

export default Modal
