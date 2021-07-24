import styled from "styled-components";
export const SocialRegister=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:0rem 1.5rem;
.item
{
    border:1px solid black;
    border-radius:5px;
    padding:0.5rem 0rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    font-weight:bold;
    img{
        height:100%;
        margin-right:0.5rem;
    }

}
`
export const Divide=styled.div`
    margin-top:1rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:rgb(216,220,231);
    &::after{
        content:"";
        width:40%;
        height:1px;
        background:rgb(216,220,231);
        display:block;
    }
    &::before{
        content:"";
        width:40%;
        height:1px;
        background:rgb(216,220,231);
        display:block;
    }

`
export const Form=styled.form`
.birth{
    .birthday{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        grid-gap:0rem 1rem;
    }
}
input{
    font-size:1.2rem;
    &:focus{
        border:2px solid rgb(254,208,47)!important;
        box-shadow:0 0 0 0;
    }
}
.register-btn{
    background:rgb(60,206,206);
    color:white;
    padding:0.5rem 0rem;
    text-align:center;
    border-radius:5px;
    width:100%;
    border:none;
}
.account-exist{
    border:2px solid rgb(216,220,231);
    border-radius:5px;
    padding:0.5rem 0rem;
    text-align:center;
    margin-top:1rem;

}
`
