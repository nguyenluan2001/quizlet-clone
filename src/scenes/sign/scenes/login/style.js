import styled from "styled-components";
export const SocialLogin=styled.div`
.item
{
    border:1px solid black;
    border-radius:5px;
    padding:2.5rem 0rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    font-weight:bold;
    position:relative;
    margin-bottom:1rem;
    img{
        position:absolute;
        left:2rem;
        height:50%;
        margin-right:0.5rem;
    }

}
`
export const Form=styled.form`
input{
    width:100%;
    border:none;
    border-bottom:3px solid black;
    font-size:1.2rem;
    outline:none;
    &:focus{
        border-bottom:3px solid rgb(254,208,47);
    }

}
.login-btn{
    background:rgb(60,206,206);
    color:white;
    padding:1rem 0rem;
    text-align:center;
    border-radius:5px;
    width:100%;
    border:none;
}
`