import styled from "styled-components";
export const Container=styled.div`
background:white;
padding:1rem;
border-radius:5px;
margin-bottom:1rem;
.top{
    display:flex;
    justify-content:space-between;
}
.content
{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:0rem 2rem;
    input{
        width:100%;
    }
}
`