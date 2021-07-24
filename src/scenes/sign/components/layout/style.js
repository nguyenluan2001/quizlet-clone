import styled from "styled-components";
export const Container=styled.div`
width:100vw;
height:100vh;
display:grid;
grid-template-columns:2fr 3fr;
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
z-index:5;
animation:show 0.2s ease-in-out;
@keyframes show
{
    from{
        transform:translateY(-100%);
    }
    to {
        transform:translateY(0%);
    }
}
`
export const Banner=styled.div`
background-image:url(https://assets.quizlet.com/a/j/dist/i/signup/signup-illo.9020601c63ffbc7.png);
background-color:rgb(238,242,250);
`
export const Content=styled.div`
background:white;
padding:3rem 7rem;
position:relative;
overflow-y:scroll;
.signs
{
    display:flex;
   p{
       font-size:1.5rem;
       font-weight:bold;
       color:rgb(216,219,228);
       margin-right:1rem;
       cursor:pointer;

       &.active{
           color:black;
           &::after{
               content:"";
               display:block;
               width:100%;
               height:5px;
               background:rgb(254,208,47);
           }
       }
   }
}
.close{
    position:absolute;
    top:2rem;
    right:2rem;
}
`