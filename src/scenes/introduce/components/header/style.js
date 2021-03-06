import styled from "styled-components"
export const Container = styled.div`
width:100%;
display:flex;
align-items:center;
background:rgb(66,87,178);
padding:0.6rem 1rem;
`
export const Logo = styled.div`
font-size:1.6rem;
font-weight:bold;
color:white;
`
export const Navbar = styled.div`
width:100%;
display:flex;
justify-content:space-between;
`
export const NavbarLeft = styled.div`
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
export const NavbarRight = styled.div`
display:flex;
align-items:center;
.search{
    display:flex;
    align-items:center;
    position:relative;
    .icon{
        color:white;
        position:absolute;
        z-index:5;
        left:0;
        padding:0rem 0.5rem;
    }
    input{
        padding:0.3rem 1rem;
        border-radius:10px;
        border:none;
        outline:none;
        background:rgb(85,104,186);
        padding-left:2rem;
        color:white;
        &::placeholder{
            color:white;
        }
        &:focus{
            background:white;
            border:none;
            outline:none;
            &::placeholder{
                color:black;
            }
            color:black;
          &+.icon{
              color:black;
          }
        }
    }
}
.buttons{
    span{
        margin:0rem 1rem;
        font-weight:bold;
    }
    .login{
        color:#cedaf3;
        cursor:pointer;
        &:hover{
            color:white;
        }
    }
    .register{
        background:rgb(255,220,98);
        color:rgb(66,87,178);
        padding:0.3rem 0.6rem;
        border-radius:5px;
        cursor:pointer;


    }
}
`