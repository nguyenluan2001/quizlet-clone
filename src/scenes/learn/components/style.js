import styled from "styled-components";
export const Container=styled.div`
border:1px solid rgba(0,0,0,0.3);
border-radius:5px;
padding:1rem;
display:flex;
align-items:center;
cursor:pointer;
.order{
    background:rgba(237,239,244);
    border-radius:50%;
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:1rem;
    margin-bottom:0;
}
&:hover{
    border:1px solid rgba(0,0,0,0.8);

}
&.true{
    border:1px solid rgb(35,178,109);
    svg{
        color:rgb(35,178,109);
    }
}
&.false{
    border:1px solid tomato;
    svg{
        color:tomato;
    }
}
`