import styled from "styled-components";
export const Container=styled.div`
background:white;
// padding:1rem;
border-radius:5px;
margin-bottom:1rem;
.top{
    display:flex;
    justify-content:space-between;
    border-bottom:2px solid rgb(246,247,251);
    padding:1rem;
    font-weight:bold;
}
.content
{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:0rem 2rem;
    padding:1rem;
    input{
        width:100%;
    }
}
input{
    
    border:none;
    border-bottom:3px solid black;
    outline:none;
    font-size:1.2rem;
    &:focus{
        border-bottom:3px solid gold;
    }
}
`