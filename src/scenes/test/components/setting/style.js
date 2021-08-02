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
`
export const WrapContent=styled.div`
width:45%;
height:90%;
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
    .create-test-btn{
        border:none;
        width:100%;
        padding:1rem 0rem;
        background:rgb(60,207,207);
        color:white;
        font-weight:bold;
        font-size:1.5rem;
        border-radius:5px;
        text-align:center;
        cursor:pointer;

    }
    .setting-test{
        display:grid;
        grid-template-columns:1fr 1fr;
        padding-top:2rem;
        .type-question{
            &>p{
                font-weight:bold;

            }
            .form-group{
                margin-bottom:0.5rem!important;
                input{
                    transform: scale(2);
                    margin-right:1rem;
                }
            }
        }
        .limit
        {
            &>p{
                font-weight:bold;
            }
            input{
                width:15%;
                border:none;
                border-bottom:3px solid rgb(35,177,109);
                &:focus{
                    outline:none;
                }
            }
        }
    }
}
`