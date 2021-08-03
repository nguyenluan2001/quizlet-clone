import React,{useState,useEffect} from 'react'
import { Container } from "./style"
import { useSelector } from "react-redux"
import Term from './Term'

function TrueFalse({showAnswer}) {
    const test = useSelector(state => state.test)
    return (
        <Container>
            <h4>{test.groupTermByType.trueFalse.length} câu hỏi đúng/sai</h4>
            {
                test.groupTermByType.trueFalse.map((item, index) => {
                    return <Term showAnswer={showAnswer} term={item} index={index+1}></Term>
                })
            }

        </Container>
    )
}

export default TrueFalse
