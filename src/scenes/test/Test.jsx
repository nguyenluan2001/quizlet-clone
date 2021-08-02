import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, LeftContent, RightContent, Answer } from "./style"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FaChevronLeft, FaFileContract } from "react-icons/fa"
import Setting from './components/setting/Setting'
import { fetchCourseById } from "../../services/slices/testSlice"
import Write from './components/write/Write'
import MatchCard from './components/matchCard/MatchCard'
import Multiple from './components/multiple/Multiple'
import TrueFalse from './components/trueFalse/TrueFalse'
function Test() {
    const [showSetting, setShowSetting] = useState(true)
    const test = useSelector(state => state.test)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCourseById(id))
    }, [])
    useEffect(() => {

    }, [])
    console.log(Object.values(test.groupTermByType))
    return (
        <Container>
            <LeftContent>
                <Link to={`/${id}/detail`} className="back">
                    <FaChevronLeft></FaChevronLeft>
                    Trở về
                </Link>
                <p className="type">
                    <FaFileContract></FaFileContract>
                    KIỂM TRA
                </p>
                <div className="setting-btn" onClick={() => setShowSetting(true)}>
                    Tùy chọn
                </div>

            </LeftContent>
            <RightContent>
                {
                    Object.values(test.groupTermByType).map((item, index) => {
                        if (item.length > 0) {
                            switch (index) {
                                case 0:
                                    {

                                        return <Write></Write>
                                        break
                                    }
                                case 1:
                                    {

                                        return <MatchCard></MatchCard>
                                        break
                                    }
                                case 2:
                                    {

                                        return <Multiple></Multiple>
                                        break
                                    }
                                case 3:
                                    {                           
                                        return <TrueFalse></TrueFalse>
                                        break
                                    }
                                default:
                                    {
                                        break
                                    }
                            }
                          
                        }
                    })
                }
                <div className="show-answer-btn">Xem đáp án</div>
            </RightContent>
            {showSetting && <Setting setShowSetting={setShowSetting}></Setting>}

        </Container>
    )
}

export default Test
