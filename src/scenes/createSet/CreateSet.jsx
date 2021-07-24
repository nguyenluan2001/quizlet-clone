import React from 'react'
import Input from './components/inputForm/Input'
import TermItem from './components/termItem/TermItem'
import { CourseInfo, Container, AddTerm } from "./style"
import { FaPlus } from "react-icons/fa"
import {useSelector,useDispatch} from "react-redux"
import {addTerm} from "../../services/slices/createSetSlice"
function CreateSet() {
    const createSet=useSelector(state=>state.createSet)
    const dispatch=useDispatch()
    console.log(createSet)
    return (
        <Container>
            <CourseInfo>
                <h3>Tạo học phần mới</h3>
                <Input label="TIÊU ĐỀ"></Input>
                <Input label="MÔ TẢ"></Input>
            </CourseInfo>
            {
                createSet.listTerms.map((item,index)=>{
                    return  <TermItem index={index} id={item.id}></TermItem>
                })
            }
           
            <AddTerm onClick={()=>dispatch(addTerm())}>
                <span className="wrapper">
                    <FaPlus></FaPlus>
                    <span>THÊM THẺ</span>
                </span>
            </AddTerm>
        </Container>
    )
}

export default CreateSet
