import React, { useState, useEffect } from 'react'
import Term from '../multiple/Term'
import { FaCheck, FaTimes } from "react-icons/fa"
function WriteItem({ term, index, showAnswer }) {
    const [input, setInput] = useState("Chưa có đáp án")
    const [result, setResult] = useState(false)
    function handleInput(e) {
        setInput(e.target.value)
    }
    useEffect(() => {
        if (showAnswer) {
            if (input == term.definition) {
                setResult(true)
            }
            else {
                setResult(false)

            }
        }
    }, [showAnswer])
    return (
        <div className="write-item">
            <p><strong>{index + 1}. </strong>{term.word}</p>
            {showAnswer
                ? (result
                    ? <div className="true">
                        <p className="title">Đúng</p>
                        <p className="text-success">
                            <FaCheck></FaCheck>
                            {input}
                        </p>
                    </div>
                    : <div className="false">
                        <p className="title">Sai</p>
                        <p className="text-danger">
                            <FaTimes></FaTimes>
                            {input}
                        </p>
                        <p className="title">Câu trả lời</p>
                        <p>{term.definition}</p>
                    </div>)
                : <input type="text" onChange={(e) => handleInput(e)} />}
        </div>
    )
}

export default WriteItem
