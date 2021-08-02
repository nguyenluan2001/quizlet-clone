import React from 'react'
import { Container } from "./style"
import { useSelector } from "react-redux"

function TrueFalse() {
    const test = useSelector(state => state.test)

    return (
        <Container>
            <h4>{test.groupTermByType.trueFalse.length} câu hỏi đúng/sai</h4>
            {
                test.groupTermByType.trueFalse.map((item, index) => {
                    return <div className="term">
                        <p><strong>{index + 1}. </strong>{`${item.word}->random`}</p>
                        <ul className="answer">
                            <li>
                                <input type="radio" name="answer" />
                                <label htmlFor="">Đúng</label>
                            </li>
                            <li>
                                <input type="radio" name="answer" />
                                <label htmlFor="">Sai</label>
                            </li>
                        </ul>

                    </div>
                })
            }

        </Container>
    )
}

export default TrueFalse
