import styled from "styled-components";
export const Container=styled.div`
display:flex;
flex-direction:column;
& > div:last-child{
    flex-grow:1;
}
`
export const TopContent=styled.div`
padding:1rem 10% 0rem 10%;
.user-info{
    display:flex;
    align-items:center;
    img{
        width:60px;
        border-radius:50%;
        border:1px solid rgba(0,0,0,0.3)
    }
    .displayName{
        font-size:2rem;
        font-weight:bold;
        margin-left:1rem;
    }
}
.library{
    display:flex;
    .item{
        font-weight:bold;
        margin-right:2rem;
        text-decoration:none;
        color:black;
        &::after{
            content:"";
            display:block;
            width:100%;
            height:2px;
            background:white;

        }
        &:hover{
            color:gold;
            &::after{
                background:gold;
            }
        }
        &.active{
            &::after{
                background:rgb(60,207,207);
            }
        }
    }
}
`
export const MainContent=styled.div`
background:rgb(246,247,251);
padding:1rem 10% 0rem 10%;

`