import styled from "styled-components";
export const Container=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
margin-bottom:4rem;


`
export const LeftContent=styled.div`
.question{
    margin-bottom:1rem;
    input{
        width:10%;
        border:none;
        border-bottom:3px solid black;
        outline:none;
        font-size:1.2rem;
        &:focus{
            border-bottom:3px solid gold;
        }
    }
}
`
export const RightContent=styled.div``