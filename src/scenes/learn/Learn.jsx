import React, { useState, useEffect } from 'react'
import { Container, Content, PopUp, PopUpContent } from "./style"
import { useParams } from "react-router-dom"
import WordItem from './components/WordItem'
import { fetchCourseById } from "../../services/database"
import { useSelector, useDispatch } from "react-redux"
import { initLearn, updateCorrect,updateWrong,resetLearn } from "../../services/slices/learnSlice"
import Result from './components/result/Result'
function Learn() {
    const { id,type } = useParams()
    console.log(type)
    const learn = useSelector(state => state.learn)
    const dispatch = useDispatch()
    const [listWords, setListWords] = useState([])
    const [chooseAnswer, setChooseAnswer] = useState(false)
    const [checkAnswer, setCheckAnswer] = useState(false)
    useEffect(() => {
        fetchCourseById(id).then(res => {
            dispatch(initLearn(res.data()))
        })
        return ()=>{
            dispatch(resetLearn())
        }
    }, [])
    useEffect(() => {
        if (learn.currentTerm != null) {
            if (learn.listTerms.length <= 4) {
                setListWords(learn.listTerms)
            }
            else {
                let tempListWords = [learn.currentTerm]
                let tempLearn = JSON.parse(JSON.stringify(learn.listTerms))
                let index = tempLearn.findIndex(item => item.id == learn.currentTerm.id)
                tempLearn.splice(index, 1)
                let count = 0
                while (count < 3 && count < tempLearn.length) {
                    console.log(count)
                    let randomIndex = Math.floor(Math.random() * (tempLearn.length - 1))
                    tempListWords.push(tempLearn[randomIndex])
                    console.log(tempLearn[randomIndex])
                    tempLearn.splice(randomIndex, 1)
                    count++
                }
                setListWords(tempListWords)
            }
        }
        else {
            console.log(learn.currentTerm)
        }

    }, [learn.currentTerm])
    useEffect(() => {
        if (chooseAnswer) {
            if (checkAnswer) {
                setTimeout(() => {
                    dispatch(updateCorrect())
                    setChooseAnswer(false)
                }, 1000);
            }
        }

    }, [chooseAnswer])
    function handleNextTerm()
    {
        dispatch(updateWrong())
        setChooseAnswer(false)
        setCheckAnswer(true)
    }
    return (
        <Container>
            {
                learn.listTermsLearning?.length>0?
                <Content>
                <div className="wrap-definition">
                    <p className="title">??i??nh nghi??a</p>
                    <p className="definition">{learn.currentTerm?.definition}</p>
                </div>
                <div className="wrap-word">
                    {chooseAnswer ?
                        (checkAnswer ? <p className="title true">Ba??n ??ang n????m ????????c ki????n th????c ??????y</p> : <p className="title false">G????n ??u??ng, ha??y ho??c ti????p nhe??</p>)
                        : <p className="title">CHO??N THU????T NG???? ??U??NG</p>}

                    <div className="list-words">
                        {
                            listWords?.map((item, index) => {
                                return <WordItem setCheckAnswer={setCheckAnswer} index={index} chooseAnswer={chooseAnswer} setChooseAnswer={setChooseAnswer}>{item.word}</WordItem>
                            })
                        }



                    </div>
                </div>
            </Content>
            :<Result id={id}></Result>
            }
           
            {!checkAnswer && chooseAnswer && <PopUp>
                <PopUpContent>
                    <p>Nh????n phi??m b????t ki?? ?????? ti????p tu??c</p>
                    <div className="continue-btn" onClick={()=>handleNextTerm()}>Ti????p tu??c</div>
                </PopUpContent>
            </PopUp>}
        </Container>
    )
}

export default Learn
