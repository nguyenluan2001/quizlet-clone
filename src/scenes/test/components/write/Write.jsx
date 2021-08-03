import React from 'react'
import {Container} from "./style"
import {useSelector} from "react-redux"
import WriteItem from './WriteItem'
function Write({showAnswer}) {
    const test=useSelector(state=>state.test)
    return (
        <Container>
            <h4>{test.groupTermByType.write.length} câu hỏi tự luận</h4>
            {
                test.groupTermByType.write.map((item,index)=>{
                    return <WriteItem showAnswer={showAnswer} term={item} index={index+1}></WriteItem>
                })
            }
        </Container>
    )
}

export default Write
