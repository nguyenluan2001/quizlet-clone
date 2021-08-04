import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from "react-redux"
import {updateCorrect} from "../../../../services/slices/testSlice"
import {FaTimes,FaCheck} from "react-icons/fa"
function Term({ term, index, showAnswer }) {
    const [input, setInput] = useState(null)
    const test = useSelector(state => state.test)
    const dispatch=useDispatch()
    const [randomDefinition, setRandomDefinition] = useState(null)
    const [result,setResult]=useState(false)
    useEffect(() => {
        let newRandomTerm = JSON.parse(JSON.stringify(test.listTerms))
        newRandomTerm=newRandomTerm.filter(item=>item.id!=term.id)
        newRandomTerm = newRandomTerm.sort(() => Math.random() - Math.random()).slice(0,3)
        newRandomTerm.push(term)
        newRandomTerm = newRandomTerm.sort(() => Math.random() - Math.random())
        setRandomDefinition(newRandomTerm)
        console.log(test.listTerms)

    }, [])
    useEffect(() => {
        if(showAnswer)
        {

            if(input==term.definition)
            {
                setResult(true)
                dispatch(updateCorrect(term))
            }
            else
            {
                setResult(false)
            }
            let radio=[...document.querySelectorAll("input[type=radio]")]
            radio.forEach(item=>{
                item.disabled=true
            })
            console.log(input)
        }
    }, [showAnswer])
    function handleInput(e)
    {
        // console.log(e.target.value)
        setInput(e.target.value)
    }
    return (
        <div className="term">
            <p><strong>{index}. </strong>{term.word}</p>
            <ul className="definition">
                {
                    randomDefinition?.map(item=>{
                        
                       return showAnswer
                            ?(item?.definition==input
                                ?(result
                                    ?<li>
                                        <input type="radio" value={item.definition} name={`definition_${index}`} onChange={(e)=>handleInput(e)} />
                                        <label htmlFor="" >
                                            {item.definition} <span className="text-success"><FaCheck></FaCheck></span>
                                        </label>
                                    </li>
                                    :
                                    <li>
                                        <input type="radio" value={item.definition} name={`definition_${index}`} onChange={(e)=>handleInput(e)} />
                                        <label htmlFor="" >
                                            {item.definition}  <span className="text-danger"><FaTimes></FaTimes></span>
                                        </label>
                                    </li>
                                    )
                                :(item.definition==term.definition
                                    ?<li>
                                    <input type="radio" value={item.definition} name={`definition_${index}`} onChange={(e)=>handleInput(e)} />
                                    <label htmlFor="" >
                                        {item.definition} <span className="text-success"><FaCheck></FaCheck></span>
                                    </label>
                                    </li>
                                    :<li>
                                    <input type="radio" value={item.definition} name={`definition_${index}`} onChange={(e)=>handleInput(e)} />
                                    <label htmlFor="" >{item.definition}</label>
                                    </li>
                                    ))
                            :<li>
                            <input type="radio" value={item.definition} name={`definition_${index}`} onChange={(e)=>handleInput(e)} />
                            <label htmlFor="" >{item.definition}</label>
                            </li>
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Term
