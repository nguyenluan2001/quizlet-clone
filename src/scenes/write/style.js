import styled from "styled-components";
export const Container = styled.div`
display:grid;
grid-template-columns:1fr 5fr;
height:100vh;
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
}
`
export const RightContent = styled.div`
background:white;
height:50vh;
margin-top:2rem;
padding:2rem;
.word{
    font-size:2rem;
    font-weight:bold;
    padding-bottom:5rem;
    border-bottom:1px solid rgba(0,0,0,0.3)
}
.definition{
    padding-top:2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    input{
        width:80%;
        display:block;
        border:none;
        border-bottom:3px solid black;
        outline:none;
        font-size:1.2rem;
        &:focus{
            border-bottom:3px solid gold;
        }
    }
    .answer-btn{
        border:none;
        padding:0.8rem 1.7rem;
        background:rgb(60,207,207);
        color:white;
        font-weight:bold;
        font-size:1rem;
        border-radius:5px;
    }
}
`
export const Answer = styled.div`
background:white;
height:90vh;
margin-top:2rem;
padding:2rem;
font-size:1rem;
p{
    margin:0;
}
.title{
    font-weight:bold;
    color:rgb(194,198,213);
}
.notify{
    font-size:2rem;
    font-weight:bold;
    color:tomato;
    padding:1rem;
}
.wrap-word{
    padding:2rem;
    border-top:1px solid rgba(0,0,0,0.3);

}
.wrap-answer{
    padding:2rem;
    border-top:1px solid rgba(0,0,0,0.3);
    .answer{
        color:tomato;
    }
}
.wrap-definition{
    padding:2rem;
    border-top:1px solid rgba(0,0,0,0.3);
    .definition{
        color:rgb(62,188,127);
    }
}
.continue-btn{
    border:none;
    padding:0.8rem 1.7rem;
    background:rgb(60,207,207);
    color:white;
    font-weight:bold;
    font-size:1rem;
    border-radius:5px;
    width:fit-content;
    margin:0px auto;
    cursor:pointer;
}
`