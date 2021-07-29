import React from 'react'
import RoundItem from './components/roundItem/RoundItem'
import {useSelector} from "react-redux"
import {Container} from "./style"
function Result() {
    const write=useSelector(state=>state.write)
    return (
        <Container>
           {write.listRounds.map((item,index)=>{
               return <RoundItem round={item} index={index}></RoundItem>

            })}
        </Container>
            
    )
}

export default Result
