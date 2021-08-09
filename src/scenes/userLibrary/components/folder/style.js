import styled from "styled-components";
import { Link } from "react-router-dom";
export const FolderItemContainer=styled(Link)`
background:white;
padding:1rem;
display:block;
margin-bottom:1rem;
&:hover{
    text-decoration:none;
}
p{
    margin:0;
    font-weight:bold;
    color:black;
}
.folder-title{
    font-size:1.5rem;
    svg{
        margin-right:1rem;
    }
}
`