import styled from "styled-components";
export const Container = styled.div`
padding:2rem 4rem;
background:rgb(246,247,251);
min-height:100vh;

`
export const CourseInfo = styled.div`
input{
    width:50%;
}
`
export const AddTerm = styled.div`
background:white;
padding:3rem 0rem;
// text-align:center;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
.wrapper{
    font-weight:bold;
    padding-bottom:0.5rem;
    border-bottom:3px solid rgb(60,207,207);
}
&:hover{
    .wrapper
    {
        color:gold;
        border-bottom:3px solid gold;
    }
}
`