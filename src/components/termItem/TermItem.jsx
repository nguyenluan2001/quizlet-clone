import React from 'react'
import { Container } from "./style"
import {FaStar,FaVolumeUp,FaPen} from "react-icons/fa"
import axios from "axios"
import {updateStartCourse} from "../../services/database"
import {useParams} from "react-router-dom"
function TermItem({term,setStars}) {
    const {id}=useParams()
    function handleSpeak()
    {
        axios(
            {
                method:"GET",
                url:"https://voicerss-text-to-speech.p.rapidapi.com/",
                params: {
                    key: '796db9e142724fbebcd43ad51940794b',
                    hl: 'en-us',
                    src: term.word,
                    f: '8khz_8bit_mono',
                    c: 'mp3',
                    r: '1',
                    b64:true,
                    v:"Mary"
                  },
                  headers: {
                    'x-rapidapi-key': '30c123d0dfmsh443d12643d4c4c0p17c846jsn3aae5be1de90',
                    'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com'
                  }
            }
        ).then(res=>{
            let audio=new Audio(res.data)
            audio.play()

        })
    }
    function handleSetStart()
    {
        updateStartCourse(id,term.id).catch(err=>{
            console.log(err)
        })
    }
    return (
        <Container>
            <span className="word">{term.word}</span>
            <span className="definition">{term.definition}</span>
            <ul className="actions">
                <li onClick={()=>handleSetStart()} className={setStars?.includes(term.id)&&"set-star"}><FaStar></FaStar></li>
                <li  onClick={()=>handleSpeak()}><FaVolumeUp ></FaVolumeUp></li>
                <li><FaPen></FaPen></li>
            </ul>
        </Container>
    )
}

export default TermItem
