import React from 'react'
import { Container } from "./style"
import {useSelector,useDispatch} from "react-redux"
import {continueWriting} from "../../../../../../services/slices/writeSlice"
function RoundItem({round,index}) {
    const write=useSelector(state=>state.write)
    const dispatch=useDispatch()
    function handleContinue()
    {
        dispatch(continueWriting())
    }
    return (
        <Container>
            <p className="round">Vòng {index+1}</p>
            <div className="correct static">
                <div>
                    <span>Đúng</span>
                    <span>{round.correct.length}</span>
                </div>
                <span className="percent">{parseFloat((round.correct.length/round.listTerms.length)*100).toFixed(0)}%</span>
            </div>
            <div className="wrong static">
                <div>
                    <span>Sai</span>
                    <span>{round.wrong.length}</span>
                </div>
                <span className="percent">{parseFloat((round.wrong.length/round.listTerms.length)*100).toFixed(0)}%</span>
            </div>
            <div className="overall static">
                <div>
                    <span>Tiến độ chung</span>
                    <span>{`${round.correct.length}/${round.listTerms.length}`}</span>
                </div>
                <span className="percent">{parseFloat((round.correct.length/round.listTerms.length)*100).toFixed(0)}%</span>
            </div>
            {
                write.listRounds[write.listRounds.length-1].wrong.length!=0
                ?<div className="continue-btn" onClick={()=>handleContinue()}>Tiếp tục</div>
                :""
            }
            
        </Container>
    )
}

export default RoundItem
