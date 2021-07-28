import React from 'react'
import {InputContainer} from "./style"
function Input({label,name}) {
    return (
        <InputContainer type="text" name={name} onChange={()=>console.log(123)}>
            {/* <input type="text" name={name} /> */}
            {/* <p htmlFor="">{label}</p> */}
        </InputContainer>
    )
}

export default Input
