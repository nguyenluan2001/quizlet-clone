import React, { useState,useEffect } from 'react'
import { Container, WrapContent } from "./style"
import { FaTimes } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import {updateFolder} from "../../../../../../services/database"
function EditFolderModal({ folder,setToggleEditFolderModal }) {
    const history = useHistory()
    const [input, setInput] = useState({
        title: "",
        description: ""
    })
    function handleInput(e) {
        setInput(pre=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    function handleSubmit(e)
    {
        e.preventDefault()
        // setToggleCreateFolder(false)
        updateFolder(folder.id,input)
        setToggleEditFolderModal(false)
    }
    useEffect(()=>{
        setInput(folder.data())
    },[])
    return (
        <Container>
            <WrapContent>
                <div className="header">
                    Sửa thư mục
                    <div onClick={()=>setToggleEditFolderModal(false)}>
                        <FaTimes></FaTimes>
                    </div>
                </div>
                <div className="content">
                    <form action="" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="title">
                            <input type="text" name="title" value={input.title} onChange={(e) => handleInput(e)} placeholder="Nhập tiêu đề" />
                            <label htmlFor="">TIÊU ĐỀ</label>
                        </div>
                        <div className="description">
                            <input type="text" name="description" value={input.description} onChange={(e) => handleInput(e)} placeholder="Nhập mô tả" />
                            <label htmlFor="">MÔ TẢ</label>
                        </div>
                        <button>Lưu</button>
                    </form>
                </div>

            </WrapContent>
        </Container>
    )
}

export default EditFolderModal
