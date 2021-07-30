import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Progress from './components/progress/Progress'
import { Container, LeftContent, RightContent, Answer } from "./style"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    initWrite,
    updateCurrentRound,
    updateListRounds,
    updateCorrect,
    updateWrong,
    resetWrite
} from "../../services/slices/writeSlice"
import { fetchCourseById } from "../../services/database"
import Result from './components/result/Result'
import { FaChevronLeft, FaPenAlt } from "react-icons/fa"
function Write() {
    const { id } = useParams()
    const write = useSelector(state => state.write)
    const dispatch = useDispatch()
    const [answer, setAnswer] = useState("")
    const [checkAnswer, setCheckAnswer] = useState(true)
    const [showSuggestion, setShowSuggestion] = useState(false)
    console.log(write)
    useEffect(() => {
        dispatch(resetWrite())
        fetchCourseById(id).then(res => {
            dispatch(initWrite(res.data()))
        })
    }, [])
    useEffect(() => {
        if (write?.currentRound?.listTermsWriting.length == 0) {
            dispatch(updateListRounds())
        }
    }, [write.currentRound])
    function handleAnswer(e) {
        setAnswer(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        setShowSuggestion(false)
        if (answer == write.currentRound.currentTerm.definition) {
            dispatch(updateCorrect())
            setAnswer("")
            setCheckAnswer(true)
        }
        else {
            // dispatch(updateCurrentRound("wrong"))
            // setAnswer("")
            setCheckAnswer(false)



        }
    }
    function handleContinue() {
        // dispatch()
        dispatch(updateWrong())

        setCheckAnswer(true)
        setAnswer("")
    }
    return (
        <Container>
            <LeftContent>
                <Link to={`/${id}/detail`} className="back">
                    <FaChevronLeft></FaChevronLeft>
                    Trở về
                </Link>
                <p className="type">
                    <FaPenAlt></FaPenAlt>
                    VIẾT
                </p>
                <Progress type="rest" background="99,117,192">CÒN LẠI</Progress>
                <Progress type="wrong" background="255,114,91">SAI</Progress>
                <Progress type="correct" background="35,178,109">ĐÚNG</Progress>
            </LeftContent>

            {write?.currentRound?.listTermsWriting.length > 0 ? (checkAnswer
                ? <RightContent>
                    {showSuggestion && <h2 className="text-danger">Chép lại đáp án</h2>}
                    {!showSuggestion && <p className="word">
                        {write.currentRound?.currentTerm?.word}
                        {!showSuggestion && <span className="dont-know" onClick={() => setShowSuggestion(true)}>Không biết</span>}
                    </p>}
                    {showSuggestion && <div className="question">
                        <p className="title">Câu hỏi</p>
                        <p >{write.currentRound?.currentTerm?.word}</p>
                    </div>}
                    {showSuggestion && <div className="suggest">
                        <p className="title">Đúng</p>
                        <p >{write.currentRound.currentTerm.definition}</p>
                    </div>}
                    <form className="definition" onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" value={answer} onChange={(e) => handleAnswer(e)} />
                        <div className="answer-btn" >Đáp án</div>
                    </form>

                </RightContent>
                : <Answer>
                    <div className="notify">
                        Học thuật ngữ này
                    </div>
                    <div className="wrap-word">
                        <p className="title">THUẬT NGỮ</p>
                        <p className="word">{write.currentRound.currentTerm.word}</p>
                    </div>
                    <div className="wrap-answer">
                        <p className="title">ĐÁP ÁN CỦA BẠN</p>
                        <p className="answer">{answer}</p>
                    </div>
                    <div className="wrap-definition">
                        <p className="title">ĐÁP ÁN ĐÚNG</p>
                        <p className="definition">{write.currentRound.currentTerm.definition}</p>
                    </div>
                    <div className="continue-btn" onClick={() => handleContinue()}>
                        Tiếp tục
                    </div>

                </Answer>)
                : <Result></Result>
            }

        </Container>
    )
}

export default Write
