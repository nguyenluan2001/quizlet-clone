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
                    Tr???? v????
                </Link>
                <p className="type">
                    <FaPenAlt></FaPenAlt>
                    VI????T
                </p>
                <Progress type="rest" background="99,117,192">CO??N LA??I</Progress>
                <Progress type="wrong" background="255,114,91">SAI</Progress>
                <Progress type="correct" background="35,178,109">??U??NG</Progress>
            </LeftContent>

            {write?.currentRound?.listTermsWriting.length > 0 ? (checkAnswer
                ? <RightContent>
                    {showSuggestion && <h2 className="text-danger">Che??p la??i ??a??p a??n</h2>}
                    {!showSuggestion && <p className="word">
                        {write.currentRound?.currentTerm?.word}
                        {!showSuggestion && <span className="dont-know" onClick={() => setShowSuggestion(true)}>Kh??ng bi????t</span>}
                    </p>}
                    {showSuggestion && <div className="question">
                        <p className="title">C??u ho??i</p>
                        <p >{write.currentRound?.currentTerm?.word}</p>
                    </div>}
                    {showSuggestion && <div className="suggest">
                        <p className="title">??u??ng</p>
                        <p >{write.currentRound.currentTerm.definition}</p>
                    </div>}
                    <form className="definition" onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" value={answer} onChange={(e) => handleAnswer(e)} />
                        <div className="answer-btn" >??a??p a??n</div>
                    </form>

                </RightContent>
                : <Answer>
                    <div className="notify">
                        Ho??c thu????t ng???? na??y
                    </div>
                    <div className="wrap-word">
                        <p className="title">THU????T NG????</p>
                        <p className="word">{write.currentRound.currentTerm.word}</p>
                    </div>
                    <div className="wrap-answer">
                        <p className="title">??A??P A??N CU??A BA??N</p>
                        <p className="answer">{answer}</p>
                    </div>
                    <div className="wrap-definition">
                        <p className="title">??A??P A??N ??U??NG</p>
                        <p className="definition">{write.currentRound.currentTerm.definition}</p>
                    </div>
                    <div className="continue-btn" onClick={() => handleContinue()}>
                        Ti????p tu??c
                    </div>

                </Answer>)
                : <Result></Result>
            }

        </Container>
    )
}

export default Write
