import styled from "styled-components";
export const Container = styled.div`
display:grid;
grid-template-columns:1fr 5fr;
min-height:100vh;
grid-gap 0rem 2rem;
padding:0rem 4rem;
background: rgb(246,247,251);
`
export const LeftContent = styled.div`
background:white;
padding:1rem;
.type{
    font-size:1.2rem;
    font-weight:bold;
    margin-top:2rem;
    margin-bottom:2rem;
    display:flex;
    align-items:center;
    svg{
        font-size:1.5rem;
        margin-right:1.3rem;
        color:rgb(66,87,178);
    }
}
.back{
    display:flex;
    align-items:center;
    color:black;
    text-decoration:none;
    font-weight:bold;
    padding:1rem 0rem;
    border-bottom:1px solid rgba(0,0,0,0.1);
    svg{
        color:rgb(65,208,208);
        margin-right:1rem;
    }
    &:hover svg{
        color:gold;
    }
}
.setting-btn{
    border:1px solid rgba(0,0,0,0.3);
    border-radius:5px;
    padding:1rem;
    text-align:center;
    font-weight:bold;
    color:rgb(134,225,225);
    cursor:pointer;
    &:hover{
        color:gold;
    }

}
`
export const RightContent = styled.div`
background:white;
height:fit-content;
margin-top:2rem;
padding:2rem;
.wrap-question{
    &>p{
        font-weight:bold;
        font-size:1.3rem;
    }
}
.show-answer-btn{
    border:none;
    padding:0.8rem 1.7rem;
    background:rgb(60,207,207);
    color:white;
    font-weight:bold;
    font-size:1rem;
    border-radius:5px;
    text-align:center;
    cursor:pointer;
}
`
