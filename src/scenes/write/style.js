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
`
export const RightContent = styled.div`
background:white;
height:fit-content;
margin-top:2rem;
padding:2rem;
.word{
    font-size:2rem;
    font-weight:bold;
    padding-bottom:5rem;
    border-bottom:1px solid rgba(0,0,0,0.3);
    display:flex;
    justify-content:space-between;
    align-items:center;
    .dont-know{
        font-size:1rem!important;
        color:rgb(71,210,210);
        cursor:pointer;
    }
}
.suggest{
    padding-top:1rem;

    .title{
        font-weight:bold;
        color:rgb(147 155 180);
    }
    &>p:last-child{
        font-size:1.3rem;
        padding:0;
    }
}
.question{
    padding-bottom:1rem;
    border-bottom:1px solid rgba(0,0,0,0.2);
    .title{
        font-weight:bold;
        color:rgb(147 155 180);
    }
    &>p:last-child{
        font-size:1.3rem;
        padding:0;
    }
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