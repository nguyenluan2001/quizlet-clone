import React from 'react'
import {Container} from "./style"
import {useSelector} from "react-redux"
function Write() {
    const test=useSelector(state=>state.test)
    return (
        <Container>
            <h4>{test.groupTermByType.write.length} câu hỏi tự luận</h4>
            {
                test.groupTermByType.write.map((item,index)=>{
                    return <div className="write-item">
                        <p><strong>{index+1}.</strong>{item.word}</p>
                        <input type="text" />
                    </div>
                })
            }
        </Container>
    )
}

export default Write
