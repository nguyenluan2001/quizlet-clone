import React, { useState, useEffect } from 'react'
import { Container, WrapResult, Content, WrapListTerms, ListTerms } from "./style"
import { useSelector } from "react-redux"
import TermItem from '../../../../components/termItem/TermItem'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { fetchCourseById } from "../../../../services/database"
import { initLearn,resetLearn } from "../../../../services/slices/learnSlice"
function Result({ id }) {
    const learn = useSelector(state => state.learn)
    const [progress, setProgress] = useState(0)
    const dispatch=useDispatch()
    useEffect(() => {
        setProgress((learn.correct?.length / learn.listTerms?.length) * 100)
    }, [learn])
    function handleLearnAgain() {
        fetchCourseById(id).then(res => {
            dispatch(resetLearn())
            dispatch(initLearn(res.data()))
        })
    }
    return (
        <Container>
            <WrapResult>
                <Content>
                    <h2>Tốt lắm, bạn đang tiến bộ đấy</h2>
                    <div className="title">TIẾN ĐỘ</div>
                    <div className="wrap-progress">
                        <span>Đã học {learn.correct?.length} thuật ngữ</span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>Còn lại {learn.wrong?.length} thuật ngữ để học thành chế độ Học</span>

                    </div>
                </Content>
            </WrapResult>
            <WrapListTerms>
                <ListTerms>
                    <p className="title">Thuật ngữ đã học ở vòng</p>
                    {learn.listTerms?.map(item => {
                        return <TermItem term={item}></TermItem>
                    })}
                </ListTerms>
            </WrapListTerms>
            <div className="buttons">
                <Link className="btn learn-done" to={`/${id}/detail`}>Học xong</Link>
                <div className="btn" onClick={() => handleLearnAgain()}>Học lại</div>
            </div>
        </Container>
    )
}

export default Result
