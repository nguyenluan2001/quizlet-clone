import React from 'react'
import RoundItem from './components/roundItem/RoundItem'
import {useSelector,useDispatch} from "react-redux"
import {Container} from "./style"
import {restartWrite} from "../../../../services/slices/writeSlice"
function Result() {
    const write=useSelector(state=>state.write)
    const dispatch=useDispatch()
    function handleRestartWrite()
    {
        dispatch(restartWrite())
    }
    return (
        <Container>
           {write.listRounds.map((item,index)=>{
               return <RoundItem round={item} index={index}></RoundItem>

            })}
            {write.listRounds[write.listRounds.length-1]?.wrong.length==0&&<div className="restart-btn" onClick={()=>handleRestartWrite()}>Bắt đầu lại</div>}
        </Container>
            
    )
}

export default Result
