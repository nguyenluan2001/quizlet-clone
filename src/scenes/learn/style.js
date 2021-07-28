import styled from "styled-components";
export const Container=styled.div`
background:rgb(246,247,251);
display:flex;
justify-content:center;
align-items:center;
`
export const Content=styled.div`
width:60%;
height:60vh;
background:white;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:2rem;
.wrap-definition{
    .title{
        color:rgb(156,182,215);
        font-weight:bold;

    }
    .definition{
        font-size:1.5rem;
        font-weight:bold;
    }
}
.wrap-word
{
    .title{
        color:rgb(156,182,215);
        font-weight:bold;
        &.true{
            color:rgb(35,178,109);
        }
        &.false{
            color:tomato;
        }

    }
    .list-words
    {
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-auto-column:minmax(1fr);
        grid-gap:1rem;
    }
}
`
export const PopUp=styled.div`
position:absolute;
bottom:0;
left:0;
right:0;
background:white;
padding:1rem 0rem;
box-shadow:1px 9px 14px 1px black;
`
export const PopUpContent=styled.div`
width:60%;
display:flex;
justify-content:space-between;
align-items:center;
margin:0px auto;
p{
    margin:0;
    font-weight:bold;
    color:rgb(156,182,215);
}
.continue-btn{
    border:none;
    padding:0.7rem 1.5rem;
    background:rgb(60,207,207);
    color:white;
    font-weight:bold;
    font-size:1rem;
    border-radius:5px;
    cursor:pointer;
}
`