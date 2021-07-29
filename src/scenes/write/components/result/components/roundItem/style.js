import styled from "styled-components";
export const Container=styled.div`
background:white;
padding:1rem;
height:fit-content;
margin-bottom:2rem;
.round{
    font-size:2rem;
    font-weight:bold;
}
.static{
    font-size:1.5rem;
    font-weight:bold;
    display:grid;
    grid-template-columns:10fr 1fr;
    padding:1rem 0rem;
    & > div{
        display:flex;
        justify-content:space-between;
    }
    .percent{
        text-align:right;
    }
}
& .static:nth-child(3){
    border-top:1px solid rgba(0,0,0,0.3);
    border-bottom:1px solid rgba(0,0,0,0.3);
}
.correct{
    color:rgb(62,188,127);
}
.wrong{
    color:tomato;
}
.overall{
    color:rgb(83,88,101);
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