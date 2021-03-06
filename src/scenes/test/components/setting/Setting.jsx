import React, { useState } from 'react'
import { Container, WrapContent } from "./style"
import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { initTest, resetTest } from "../../../../services/slices/testSlice"
function Setting({ setShowSetting,setShowAnswer }) {
    const [input, setInput] = useState({
        numQuestions: 6,
        typeQuestions: []
    })
    const test = useSelector(state => state.test)
    const dispatch = useDispatch()
    console.log(test)
    function handleInput(e) {
        switch (e.target.name) {
            case "typeQuestions":
                {
                    let index = input.typeQuestions.findIndex(item => item == e.target.value)
                    console.log(index)
                    if (index != "-1") {
                        console.log("exist")

                        let newType = [...input.typeQuestions]
                        newType = newType.filter(item => {
                            return item != e.target.value
                        })
                        setInput(pre => {
                            return { ...pre, typeQuestions: newType }
                        })
                    }
                    else {
                        console.log("not exist")
                        setInput(pre => {
                            return { ...pre, typeQuestions: [...pre.typeQuestions, e.target.value] }
                        })
                    }
                }
                break
            case "numQuestions":
                {
                    setInput(pre => {
                        return { ...pre, numQuestions: e.target.value }
                    })
                }
                break
            default: {
                return
            }
        }

    }
    function handleSubmit() {
        dispatch(resetTest())
        dispatch(initTest(input))
        setShowSetting(false)
        setShowAnswer(false)
    }
    return (
        <Container>
            <WrapContent>
                <div className="header">
                    Tu??y cho??n
                    <div onClick={() => setShowSetting(false)}>
                        <FaTimes></FaTimes>
                    </div>
                </div>
                <div className="content">

                    <div className="create-test-btn" onClick={() => handleSubmit()}>
                        Ta??o ba??i ki????m tra m????i
                    </div>
                    <div className="setting-test">
                        <div className="type-question">
                            <p>LOA??I C??U HO??I</p>
                            <div className="form-group">
                                <input type="checkbox" name="typeQuestions" value="write" onChange={(e) => handleInput(e)} />
                                <label htmlFor="">T???? lu????n</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="typeQuestions" value="match-card" onChange={(e) => handleInput(e)} />
                                <label htmlFor="">Ghe??p the??</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="typeQuestions" value="multiple" onChange={(e) => handleInput(e)} />
                                <label htmlFor="">Nhi????u l????a cho??n</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="typeQuestions" value="trueFalse" onChange={(e) => handleInput(e)} />
                                <label htmlFor="">??u??ng/Sai</label>
                            </div>
                        </div>
                        <div className="limit">
                            <p>GI????I HA??N C??U HO??I</p>
                            <div className="form-group">
                                <input type="text" name="numQuestions" value={input.numQuestions} onChange={(e) => handleInput(e)} />
                                <label htmlFor="">/{test.listTerms?.length} c??u ho??i</label>
                            </div>
                        </div>
                    </div>
                </div>

            </WrapContent>
        </Container>
    )
}

export default Setting
