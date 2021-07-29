import React, { useState, useEffect } from 'react'
import { Container } from "./style"
import { useSelector } from "react-redux"
function Progress({ children, type,background }) {
    const write = useSelector(state => state.write)
    const currentRound=write.currentRound
    const [number, setNumber] = useState(0)
    const [progress,setProgress]=useState(0)
    useEffect(() => {
        if (currentRound?.listTerms != null) {
            switch (type) {
                case "rest":
                    {
                        setNumber(currentRound?.listTermsWriting.length)
                        break
                    }
                case "wrong":
                    {
                        setNumber(currentRound?.wrong.length)
                        break
                    }
                case "correct":
                    {
                        setNumber(currentRound?.correct.length)
                        break
                    }
                default: {
                    // setNumber(0)
                }
            }
        }
    }, [write])
    useEffect(()=>{
        let p=(number/currentRound?.listTerms?.length)*100
        setProgress(p)
    },[number])
    return (
        <Container background={background}>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width:`${progress}%`}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="info">
                <span>{children}</span>
                <span>{number}</span>
            </div>
        </Container>
    )
}

export default Progress
