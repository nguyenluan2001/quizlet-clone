import React,{useState,useEffect} from 'react'
import {useSelector} from "react-redux"
function Term({term,index,showAnswer}) {
    const [input,setInput]=useState(null)
    const test=useSelector(state=>state.test)
    const [randomDefinition,setRandomDefinition]=useState(null)
    const [result,setResult]=useState(false)
    useEffect(()=>{
        let randomIndex=Math.floor(Math.random()*(test.listTerms.length-1))
        let definition=test.listTerms[randomIndex]
        setRandomDefinition(definition)
    },[])
    useEffect(()=>{
        if((term.definition==randomDefinition?.definition)==input)
        {
            setResult(true)
        }
        else
        {
            setResult(false)
        }
    },[showAnswer])
    function handleInput(e)
    {
        setInput(e.target.value)
    }
    return (
        <div className="term">
        <p><strong>{index}. </strong>{`${term.word}->${randomDefinition?.definition}`}</p>
        <ul className="answer">
            <li>
                <input type="radio" value="true" name="answer" onChange={(e)=>handleInput(e)} />
                <label htmlFor="">Đúng</label>
            </li>
            <li>
                <input type="radio" value="false" name="answer" onChange={(e)=>handleInput(e)} />
                <label htmlFor="">Sai</label>
            </li>
        </ul>
        {
            showAnswer
            ?(
                result
            ?<div className="true">
                <p className="title">Đúng</p>
                <p>{input}</p>
            </div>
            :<div className="false">
                <p className="title">Sai</p>
                <p>x {input}</p>
                <p className="title">Câu trả lời</p>
                <p>{!input}</p>
                <p>Câu trả lời như sau: {`-> ${term.definition}`}</p>
            </div>
            ):""
        }

    </div>
    )
}

export default Term
