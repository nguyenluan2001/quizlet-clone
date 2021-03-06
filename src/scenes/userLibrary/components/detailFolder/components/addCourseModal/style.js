import styled from "styled-components";
export const Container=styled.div`
width:100vw;
height:100vh;
background:rgba(0,0,0,0.3);
position:fixed;
left:0;
right:0;
top:0;
bottom:0;
display:flex;
justify-content:center;
// align-items:center;
padding-top:5%;
z-index:5;
overflow-y:scroll;
`
export const WrapContent=styled.div`
width:40%;
height:fit-content;
background:rgb(245,246,250);
.header{
    background:rgb(66,87,177);
    color:white;
    font-size:2rem;
    font-weight:bold;
    padding:2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    svg{
        cursor:pointer;
    }
}
.content
{
    padding:2rem;
   .create-course
   {
       background:white;
       display:flex;
       justify-content:center;
       align-items:center;
       padding:1rem 0rem;
       cursor:pointer;
       p{
           display:inline-block;
           margin:0;
           font-size:1.2rem;
           font-weight:bold;
       }
       &> p::after{
           content:"";
           display:block;
           height:3px;
           width:100%;
           background:rgb(60,206,206);
           margin-top:1rem;

       }
       &:hover{
           p{
               color:gold;
               &::after{
                   background:gold;
               }
           }
       }
   }
   .list-courses
   {
       .course-item
       {
           display:flex;
           justify-content:space-between;
           align-items:center;
           background:white;
           padding:1.5rem;
           margin-bottom:1rem;
           .title{
               font-size:1.5rem;
               font-weight:bold;
           }
           .button{
                border:1px solid rgba(0,0,0,0.3);
                width:50px;
                height:40px;
                display:flex;
                justify-content:center;
                align-items:center;
                color:rgb(60,206,206);
                border-radius:5px;
                cursor:pointer;
                &:hover svg{
                    color:gold;
                }
            }
            .added{
                background:gold;
                color:black;
            }
       }
   }
}
`