import React from 'react'
import {Container,LeftContent,RightContent} from "./style"
import {useSelector} from "react-redux"
function MatchCard() {
    const test=useSelector(state=>state.test)
    return (
        <>
        <h4>{test.groupTermByType["match-card"].length} câu hỏi ghép thẻ</h4>
        <Container>
            <LeftContent>
                {
                    test.groupTermByType["match-card"].map((item,index)=>{
                        return <div className="question">
                            <span>{index+1}.</span>
                            <input type="text" />
                            {item.word}
                        </div>
                    })
                }
            </LeftContent>
            <RightContent>
                <p>A. abc</p>
                <p>A. abc</p>
                <p>A. abc</p>
                <p>A. abc</p>
                <p>A. abc</p>
            </RightContent>
        </Container>
        </>
    )
}

export default MatchCard
