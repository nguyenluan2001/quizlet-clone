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
                    <p className="title">Định nghĩa</p>
                    <p className="definition">{learn.currentTerm?.definition}</p>
                </div>
                <div className="wrap-word">
                    {chooseAnswer ?
                        (checkAnswer ? <p className="title true">Bạn đang nắm được kiến thức đấy</p> : <p className="title false">Gần đúng, hãy học tiếp nhé</p>)
                        : <p className="title">CHỌN THUẬT NGỮ ĐÚNG</p>}

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
                    <p>Nhấn phím bất kì để tiếp tục</p>
                    <div className="continue-btn" onClick={()=>handleNextTerm()}>Tiếp tục</div>
                </PopUpContent>
            </PopUp>}
        </Container>
    )
}

export default Learn
