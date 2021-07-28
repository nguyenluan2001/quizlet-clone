import styled from "styled-components";
export const Container = styled.div`
// padding:2rem 4rem;
background:rgb(246,247,251);
min-height:100vh;
.done-btn{
    text-align:right;
    margin-top:1.5em;
    button{
        border:none;
        padding:1rem 5rem;
        background:rgb(60,207,207);
        color:white;
        font-weight:bold;
        font-size:1.5rem;
        border-radius:5px;
    }
}
.done-btn-sm{
    text-align:right;
    margin-top:1.5em;
    button{
        border:none;
        padding:0.5rem 1.5rem;
        background:rgb(60,207,207);
        color:white;
        font-weight:bold;
        font-size:1rem;
        border-radius:5px;
    }
}
`
export const CourseInfo = styled.div`
background:white;
padding:2rem 4rem;
input{
    width:50%;
    display:block;
    border:none;
    border-bottom:3px solid black;
    outline:none;
    font-size:1.2rem;
    &:focus{
        border-bottom:3px solid gold;
    }
}
.top-course-info{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
`
export const ListTerms=styled.div`
padding:2rem 4rem;

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
export const StickyHeader=styled.div`
position:fixed;
background:white;
left:0;
right:0;
top:0;
display:flex;
align-items:center;
justify-content:space-between;
box-shadow:0px -12px 20px 4px black;
padding:0.5rem 5rem;
.title{
    margin:0;
    font-size:2rem;
    font-weight:bold;
}
.done-btn{
    text-align:right;
    button{
        border:none;
        padding:0.5rem 1.5rem;
        background:rgb(60,207,207);
        color:white;
        font-weight:bold;
        font-size:1rem;
        border-radius:5px;
    }
}
`