import styled from "styled-components"
export const Container = styled.div`
width:100%;
display:flex;
align-items:center;
background:rgb(66,87,178);
padding:0.8rem 1rem;
height:fit-content;
.sticky{
    position:sticky;
}
z-index:10;
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
.library
{
    margin-right:2rem;
    .title{
        font-weight:bold;
        color:rgb(203,215,242);
    }
    .dropdown-content{
        width:500px;
        background:white;
        top:3rem!important;
        border:1px solid black;
        border-radius:5px;
        position:absolute;
        .nav
        {
            border-bottom: 2px solid #dee2e6;
            .nav-link
            {
                border:none;
                font-weight:bold;
                color:black;
                &.active{
                    border-bottom:2px solid rgb(118,219,220)!important;
                }
                &:hover{
                    color:gold;
                    border-bottom:2px solid gold!important;

                }
            }
        }
    }
    .tab-content{
        padding:1rem 0rem;
        .item{
            padding:0.5rem 2rem;
            .course-name{
                font-weight:bold;
                margin-bottom:0;
            }
            img{
                width:30px;
                border-radius:50%;
            }
            &:hover{
                background:#f6f7fb;
            }
        }
    }

}
a{
    text-decoration:none;
}
a.active{
    position:relative;
    &::after{
        content:"";
        display:flex;
        height:4px;
        width:100%;
        background:gold;
        position:absolute;
        margin-top:1rem;
        border-radius: 5px 5px 0px 0px;


    }
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
export const WrapperHeader=styled.div`
position:relative;
`
