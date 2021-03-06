import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {updateCorrect} from "../../../../services/slices/testSlice"
function Term({term,index,showAnswer}) {
    const [input,setInput]=useState(null)
    const test=useSelector(state=>state.test)
    const dispatch=useDispatch()
    const [randomDefinition,setRandomDefinition]=useState(null)
    const [result,setResult]=useState(false)
    useEffect(()=>{
        let randomIndex=Math.floor(Math.random()*(test.listTerms.length-1))
        let definition=test.listTerms[randomIndex]
        setRandomDefinition(definition)
    },[])
    useEffect(()=>{
        if(showAnswer)
        {

            if(term.definition==randomDefinition?.definition)
            {
                if(input=="true")
                {
                    setResult(true)
                    dispatch(updateCorrect(term))
    
                }
                else if(input==null)
                {
    
                    setResult(false)
                }
                else
                {
                    setResult(false)
                }
            }
            else
            {
                if(input=="true")
                {
                    setResult(false)
    
                }
                else if(input==null)
                {
                    setResult(false)
                }
                else
                {
                    setResult(true)
                    dispatch(updateCorrect(term))

                }
    
            }
            let radio=[...document.querySelectorAll("input[type=radio]")]
            radio.forEach(item=>{
                item.disabled=true
            })
        }
    },[showAnswer])
    function handleInput(e)
    {
        setInput(e.target.value)
    }
    return (
        <div className="term">
        <p><strong>{index}. </strong>{`${term.word}->${randomDefinition?.definition}`}</p>
        <ul className="answer">
            <li>
                <input type="radio" value="true" name={`answer_${index}`} onChange={(e)=>handleInput(e)} />
                <label htmlFor="">??u??ng</label>
            </li>
            <li>
                <input type="radio" value="false" name={`answer_${index}`} onChange={(e)=>handleInput(e)} />
                <label htmlFor="">Sai</label>
            </li>
        </ul>
        {
            showAnswer
            ?(
                result
            ?<div className="true-TF">
                <p className="title">??u??ng</p>
                <p className="true-answer">{input=="true"?"??u??ng":"Sai"}</p>
            </div>
            :<div className="false-TF">
                <p className="title">Sai</p>
                <p className="false-answer">
                    x 
                    {input!=null?(input=="true"?"??u??ng":"Sai"):"Ch??a co?? ??a??p a??n"}
                </p>
                <p className="title">C??u tra?? l????i</p>
                <p>{
                    input!=null
                    ?( input=="true"?"Sai":"??u??ng")
                    :(
                        term.definition==randomDefinition?.definition
                        ?"??u??ng":"Sai"
                    )
                }</p>
                <p>C??u tra?? l????i nh?? sau: {`-> ${term.definition}`}</p>
            </div>
            ):""
        }

    </div>
    )
}

export default Term
