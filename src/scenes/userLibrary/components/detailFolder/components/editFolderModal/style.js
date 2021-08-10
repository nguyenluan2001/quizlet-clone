import styled from "styled-components";
export const Container=styled.div`
width:100vw;
height:100vh;
background:rgba(0,0,0,0.3);
position:fixed;
left:0;
right:0;
top:0;
bottom:0;
display:flex;
justify-content:center;
align-items:center;
z-index:5;
`
export const WrapContent=styled.div`
width:40%;
height:65%;
background:white;
.header{
    background:rgb(66,87,177);
    color:white;
    font-size:2rem;
    font-weight:bold;
    padding:2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    svg{
        cursor:pointer;
    }
}
.content
{
    padding:2rem;
    input{
        width:100%;
        display:block;
        border:none;
        border-bottom:3px solid black;
        outline:none;
        font-size:1.2rem;
        // margin-bottom:1.5rem;
        &:focus{
            border-bottom:3px solid gold;
        }
    }
    button{
        border:none;
        padding:1rem 1.5rem;
        background:rgb(60,207,207);
        color:white;
        font-weight:bold;
        font-size:1rem;
        border-radius:5px;
        width:100%;
        font-size:1.5rem;
        margin-top:1rem;
    }
}
`