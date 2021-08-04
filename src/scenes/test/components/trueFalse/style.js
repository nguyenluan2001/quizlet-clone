import styled from "styled-components";
export const Container=styled.div`
margin-bottom:4rem;

.term{
    margin-bottom:1rem;
    .answer{
        list-style-type:none;
        padding-left:1rem;
        margin:0;
        li{
            margin:0.5rem 0rem;
        }
    }
    & .true-TF{
        padding-left:1rem;
        & .title{
            font-weight:bold;
            color:rgb(177,183,201);
        }
        & .true-answer{
            color:rgb(54,185,122);
        }
    }
    & .false-TF{
        padding-left:1rem;
        & .title{
            font-weight:bold;
            color:rgb(177,183,201);
        }
        & .false-answer{
            color:tomato;
        }
    }
}
`