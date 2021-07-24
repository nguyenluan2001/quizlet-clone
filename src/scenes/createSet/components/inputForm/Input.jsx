import React from 'react'
import {InputContainer} from "./style"
function Input({label}) {
    return (
        <InputContainer type="text">
            <input type="text" />
            <p htmlFor="">{label}</p>
        </InputContainer>
    )
}

export default Input
