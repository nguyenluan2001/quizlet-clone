import React from 'react'
import { Container } from "./style"
import {FaStar,FaVolumeUp,FaPen} from "react-icons/fa"
function TermItem({term}) {
    return (
        <Container>
            <span className="word">{term.word}</span>
            <span className="definition">{term.definition}</span>
            <ul className="actions">
                <li><FaStar></FaStar></li>
                <li><FaVolumeUp></FaVolumeUp></li>
                <li><FaPen></FaPen></li>
            </ul>
        </Container>
    )
}

export default TermItem
