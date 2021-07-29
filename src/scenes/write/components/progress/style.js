import styled from "styled-components";
export const Container=styled.div`
margin-bottom:1rem;
.info{
    display:flex;
    justify-content:space-between;
    font-size:0.9rem;
    font-weight:bold;
}
.progress{
    background:${({background})=>`rgba(${background},0.5)`};
    .progress-bar{
        background:${({background})=>`rgba(${background})`};

    }
}
`