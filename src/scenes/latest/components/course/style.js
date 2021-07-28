import styled from "styled-components";
import {Link} from "react-router-dom"
export const Container=styled(Link)`
background:white;
padding:1rem 2rem;
display:block;
text-decoration:none;
&:hover{
    text-decoration:none;
    box-shadow:3px 3px 7px 0px black;
}
.title{
    font-size:1.2rem;
    font-weight:bold;
    color:black;
}
.num-terms{
    color:rgb(147,155,180);
    font-weight:bold;
    display:flex;
    align-items:center;
    svg{
        margin-left:1rem;
    }
}
.user{
    display:flex;
    align-items:center;
    color:black;
    font-weight:bold;
    .avatar{
        width:50px;
        img{
            width:100%;
        }
    }
}
`