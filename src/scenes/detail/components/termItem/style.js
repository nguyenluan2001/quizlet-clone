import styled from "styled-components";
export const Container=styled.div`
display:grid;
grid-template-columns:1fr 1fr 0.5fr;
box-shadow:0px 0px 5px 0px black;
padding: 1rem;
font-size:1.2rem;
margin-bottom:1rem;
.actions{
    list-style-type:none;
    display:flex;
    justify-content:flex-end;
    padding:0;
    margin:0;
    li{
        margin-left:0.5rem;
        cursor:pointer;
        &:hover{
            color:gold;
        }
    }
} 
`