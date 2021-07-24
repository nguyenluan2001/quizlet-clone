import styled from "styled-components";
export const InputContainer=styled.div`
input
{
    border:none;
    border-bottom:3px solid black;
    outline:none;
    font-size:1.2rem;
    &:focus{
        border-bottom:3px solid gold;
    }

}
p{
    font-weight:bold;
    color:rgb(155,158,186);
}
`