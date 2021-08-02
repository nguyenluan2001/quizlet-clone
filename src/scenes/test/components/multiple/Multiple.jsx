import React from 'react'
import {Container} from "./style.js"
import {useSelector} from "react-redux"

function Multiple() {
    const test=useSelector(state=>state.test)

    return (
        <Container>
            <h4>{ test.groupTermByType.multiple.length} câu hỏi nhiều lựa chọn</h4>
            {
                test.groupTermByType.multiple.map((item,index)=>{
                    return <div className="term">
                        <p><strong>{index+1}. </strong>{item.word}</p>
                        <ul className="definition">
                            <li>
                                <input type="radio" name={`definition_${index}`} />
                                <label htmlFor="" >123</label>
                            </li>
                            <li>
                                <input type="radio" name={`definition_${index}`} />
                                <label htmlFor="" >123</label>
                            </li>
                            <li>
                                <input type="radio" name={`definition_${index}`} />
                                <label htmlFor="" >123</label>
                            </li>
                            <li>
                                <input type="radio" name={`definition_${index}`} />
                                <label htmlFor="" >123</label>
                            </li>
                        </ul>
                    </div>
                })
            }

        </Container>
    )
}

export default Multiple
