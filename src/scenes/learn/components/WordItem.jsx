import React from 'react'
import { Container } from "./style"
import { useSelector,useDispatch } from "react-redux"
import {FaCheck,FaTimes} from "react-icons/fa"
function WordItem({ children, index, chooseAnswer, setChooseAnswer,setCheckAnswer }) {
    const learn = useSelector(state => state.learn)
    function handleChooseAnswer()
    {
        if(!chooseAnswer)
        {
            setChooseAnswer(true)
            if(learn.currentTerm.word==children)
            {
                setCheckAnswer(true)
            }
            else
            {
                // alert(false)
                setCheckAnswer(false)
            }
        }
    }
    return (
        <Container className={chooseAnswer ? (learn.currentTerm.word == children ? "true" : "false") : ""} onClick={() => handleChooseAnswer()}>
            <p className="order">
                {chooseAnswer ? (learn.currentTerm.word == children ? <FaCheck></FaCheck> : <FaTimes></FaTimes>) : index+1}
            </p>
            {children}
        </Container>
    )
}

export default WordItem
