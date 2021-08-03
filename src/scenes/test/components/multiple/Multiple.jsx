import React from 'react'
import {Container} from "./style.js"
import {useSelector} from "react-redux"
import Term from "./Term"
function Multiple({showAnswer}) {
    const test=useSelector(state=>state.test)

    return (
        <Container>
            <h4>{ test.groupTermByType.multiple.length} câu hỏi nhiều lựa chọn</h4>
            {
                test.groupTermByType.multiple.map((item,index)=>{
                    return <Term showAnswer={showAnswer} term={item} index={index+1}></Term>
                })
            }

        </Container>
    )
}

export default Multiple
