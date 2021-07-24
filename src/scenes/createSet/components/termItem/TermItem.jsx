import React from 'react'
import { FaTrashAlt } from "react-icons/fa"
import Input from '../inputForm/Input'
import { Container } from "./style"
import {useDispatch} from "react-redux"
import {deleteTerm} from "../../../../services/slices/createSetSlice"
function TermItem({index,id}) {
    const dispatch=useDispatch()
    function handleDelete()
    {
        dispatch(deleteTerm(id))
    }
    return (
        <Container>
            <div className="top">
                <span className="order">{index+1}</span>
                <div className="delete">
                    <FaTrashAlt onClick={()=>handleDelete()}></FaTrashAlt>
                </div>
            </div>
            <div className="content">
                <div className="word">
                    <Input label="THUẬT NGỮ"></Input>
                </div>
                <div className="definition">
                    <Input label="ĐỊNH NGHĨA"></Input>
                </div>
            </div>
        </Container>
    )
}

export default TermItem
