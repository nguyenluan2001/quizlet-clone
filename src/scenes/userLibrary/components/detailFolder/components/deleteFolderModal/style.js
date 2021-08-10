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
align-items:center;
z-index:5;
`
export const WrapContent=styled.div`
width:40%;
height:60%;
background:white;
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
   .buttons{
       text-align:center;
       margin-top:1rem;
       button{
           padding:1rem 2rem;
           font-size:1.5rem;
           font-weight:bold;
           border:none;
           border-radius:5px; 
           color:white;
       }
       .cancel{
           background:rgb(48,53,69);
           margin-right:0.5rem;
           &:hover{
               background:rgba(48,53,69,0.6);
           }
       }
       .agree{
           background:rgb(254,114,91);
           margin-left:0.5rem;

           &:hover{
            background:rgba(254,114,91,0.6);
        }
       }
   }
    
}
`