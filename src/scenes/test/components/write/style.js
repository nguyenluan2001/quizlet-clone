import styled from "styled-components";
export const Container = styled.div`
margin-bottom:4rem;
.write-item
{
    margin-bottom:1rem;
    p{
        margin-bottom:0;
    }
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
    .true{
        padding-left:1rem;
        p{
            margin-bottom:1rem;
        }
        & .title{
            font-weight:bold;
            color:rgb(179,185,202);
        }
    }
    .false{
        padding-left:1rem;
        p{
            margin-bottom:1rem;
        }
        & .title{
            font-weight:bold;
            color:rgb(179,185,202);
        }
    }
}
`