import React, { useState } from 'react'
import { Container, WrapContent } from "./style"
import { FaTimes } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import {createFolder} from "../../../../services/database"
function ModalFolder({ courseId,setToggleCreateFolder }) {
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
        createFolder(input)
        setToggleCreateFolder(false)
    }
    return (
        <Container>
            <WrapContent>
                <div className="header">
                    Tạo thư mục mới
                    <div onClick={()=>setToggleCreateFolder(false)}>
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
                        <button>Tạo thư mục</button>
                    </form>
                </div>

            </WrapContent>
        </Container>
    )
}

export default ModalFolder
