import styled from "styled-components"
export const Container=styled.div`
width:100%;
display:flex;
align-items:center;
background:rgb(66,87,178);
`
export const Logo=styled.div`
font-size:2rem;
font-weight:bold;
color:white;
`
export const Navbar=styled.div`
width:100%;
display:flex;
justify-content:space-between;
`
export const NavbarLeft=styled.div`
display:flex;
align-items:center;
margin-left:2rem;
.home{
    font-weight:bold;
    color:#cedaf3;
    margin-right:2rem;
    &:hover{
        color:white;
    }
}
.create-btn{
    background:rgb(119,221,221);
    border:none;
    font-weight:bold;
    padding:0.3rem 1rem;
    border-radius:5px;
    color:rgb(66,87,178);
}
`
export const NavbarRight=styled.div``