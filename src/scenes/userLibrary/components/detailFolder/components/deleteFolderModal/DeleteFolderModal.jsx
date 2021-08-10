import React from 'react'
import { Container, WrapContent } from "./style"
import { FaTimes } from "react-icons/fa"
import {deleteFolder} from "../../../../../../services/database"
import { useHistory } from "react-router-dom"
function DeleteFolderModal({ folder,setDeleteFolderModal }) {
    const history = useHistory()
    function handleDelete() {
        history.push("/latest")
        deleteFolder(folder.id)
    }
    return (
        <Container>
            <WrapContent>
                <div className="header">
                    Xóa thư mục
                    <div onClick={()=>setDeleteFolderModal(false)} >
                        <FaTimes></FaTimes>
                    </div>
                </div>
                <div className="content">
                    <h4>coúe</h4>
                    <p>Xóa thư mục là thao tác VĨNH VIỄN.
                        Bạn không thể hoàn tác.
                        Bạn chắc chắn muốn xóa thư mục này?
                         Học phần trong thư mục này sẽ không bị xoá</p>
                    <div className="buttons">
                        <button className="cancel" onClick={()=>setDeleteFolderModal(false)}>Hủy</button>
                        <button className="agree" onClick={() => handleDelete()}>Xóa thư mục</button>
                    </div>
                </div>

            </WrapContent>
        </Container>
    )
}

export default DeleteFolderModal
