import styled from "styled-components";
export const Container=styled.div`
width:100%;
min-height:100vh;
background:rgb(246,247,251);
.buttons{
    display:flex;
    justify-content:center;
   .btn{
    margin-right:2rem;
    width:fit-content;
    text-align:center;
    border:none;
    padding:0.7rem 1.5rem;
    background:rgb(60,207,207);
    color:white;
    font-weight:bold;
    font-size:1rem;
    border-radius:5px;
    cursor:pointer;
   }
   .learn-done
   {
       background:white;
       color:black;
       border:1px solid rgba(0,0,0,0.5);
   }
}
`
export const WrapResult=styled.div`
padding:2rem 0rem;
background:white;

`
export const Content=styled.div`
width:85%;
margin:0px auto;
h1{
    margin
}
& .title{
    font-weight:bold;
    color:rgb(156,170,191);
}
.wrap-progress{
    display:flex;
    align-items:center;
    .progress{
        width:300px;
        margin:0rem 1rem;
    }
    &>span:first-child{
        font-size:1.3rem;
        font-weight:bold;
        color:rgb(100,111,144);
    }
    &>span:last-child{
        font-size:1rem;
        font-weight:bold;
        color:rgb(156,170,191);
    }

}
`
export const WrapListTerms=styled.div`
background:rgb(246,247,251);
padding:2rem 0rem;

`
export const ListTerms=styled.div`
width:85%;
margin:0px auto;
.title{
    font-weight:bold;
    color:rgb(156,170,191);
}
`