import React,{useState,useEffect} from 'react'
import {Container,WrapResult,Content,WrapListTerms,ListTerms} from "./style"
import {useSelector} from "react-redux"
import TermItem from '../../../../components/termItem/TermItem'
function Result() {
    const learn=useSelector(state=>state.learn)
    const [progress,setProgress]=useState(0)
    useEffect(()=>{
        console.log(learn.correct?.length)
        console.log(learn.listTerms?.length)
        console.log((learn.correct?.length/learn.listTerms?.length)*100)
        setProgress((learn.correct?.length/learn.listTerms?.length)*100)
        console.log(progress)
    },[learn])

    return (
        <Container>
            <WrapResult>
                <Content>
                    <h2>Tốt lắm, bạn đang tiến bộ đấy</h2>
                    <div className="title">TIẾN ĐỘ</div>
                    <div className="wrap-progress">
                        <span>Đã học {learn.correct?.length} thuật ngữ</span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:`${progress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>Còn lại {learn.wrong?.length} thuật ngữ để học thành chế độ Học</span>

                    </div>
                </Content>
            </WrapResult>
            <WrapListTerms>
                <ListTerms>
                    <p className="title">Thuật ngữ đã học ở vòng</p>
                    {learn.listTerms?.map(item=>{
                        return <TermItem term={item}></TermItem>
                    })}
                </ListTerms>
            </WrapListTerms>
        </Container>
    )
}

export default Result
