import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from "react-icons/fa"
import Input from '../inputForm/Input'
import { Container } from "./style"
import { useDispatch } from "react-redux"
import { deleteTerm, updateTerm } from "../../../../services/slices/createSetSlice"
import axios from "axios"
function TermItem({ index, term }) {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        id: term.id,
        word: "",
        definition: ""
    })
    const [wordSuggest, setWordSuggest] = useState([])
    function handleDelete() {
        dispatch(deleteTerm(term.id))
    }
    function handleInput(e) {
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    useEffect(()=>{
        setInput(term)
        console.log(term)
    },[])
    useEffect(() => {
        dispatch(updateTerm(input))
       
    }, [input])
    return (
        <Container>
            <div className="top">
                <span className="order">{index + 1}</span>
                <div className="delete">
                    <FaTrashAlt onClick={() => handleDelete()}></FaTrashAlt>
                </div>
            </div>
            <div className="content">
                <div className="word">
                    <input type="text" name="word" value={input.word} onChange={(e) => handleInput(e)} />
                    <label htmlFor="">THUẬT NGỮ</label>
                    <ul className="suggest">

                    </ul>
                </div>
                <div className="definition">
                    <input type="text" name="definition" value={input.definition} onChange={(e) => handleInput(e)} />
                    <label htmlFor="">ĐỊNH NGHĨA</label>
                </div>
            </div>
        </Container>
    )
}

export default TermItem
