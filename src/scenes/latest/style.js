import styled from "styled-components";
export const ListCourses=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-auto-columns:mimax(1fr);
grid-gap:1rem 1rem;
`
export const Container=styled.div`
padding:1rem 3rem;
background:rgb(246,247,251);
min-height:100vh;
`