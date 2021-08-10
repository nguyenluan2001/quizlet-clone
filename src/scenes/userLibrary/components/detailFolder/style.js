import styled from "styled-components";
export const Container=styled.div`
display:flex;
flex-direction:column;
& > div:last-child{
    flex-grow:1;
}
`
export const TopContent=styled.div`
padding:1.5rem 10% 1.5rem 10%;
.folder-header{
    display:flex;
    justify-content:space-between;
    .left-header{
        display:flex;
        font-weight:bold;
        .num-courses{
            padding-right:1rem;
            border-right:1px solid rgba(0,0,0,0.3);
        }
        .displayName{
            padding-left:1rem;
        }
    }
    .right-header{
        display:flex;
        align-items:center;
        .item{
            margin-left:1rem;
            width:35px;
            height:35px;
            border-radius:50%;
            background:rgb(60,207,207);
            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
            cursor:pointer;
        }
        .dropdown-toggle::after{
            display:none;
        }
    }
}
.folder-title{
    font-size:3rem;
    font-weight:bold;
    svg{
        font-size:4rem;
        margin-right:1rem;
        color:rgb(147,155,180);
    }
}
`
export const MainContent=styled.div`
background:rgb(246,247,251);
padding:1rem 10% 0rem 10%;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-auto-columns:mimax(1fr);
grid-gap:1rem 1rem;
`