import styled from "styled-components";
export const Container = styled.div`

`
export const WrapCourseInfo=styled.div`
padding:1rem 20rem;
.title{
    font-size:1.5rem;
    font-weight:bold;
}
`
export const CourseInfo = styled.div`
.top-content{
    display:flex;
    justify-content:space-between;
    border-top:1px solid rgba(0,0,0,0.3);
    padding-top:1rem;
    .user{
        img{
            width:50px;
            height:fit-content;
        }
        .user-name{
            p{
                margin:0;
            }
            & p:last-child{
                font-weight:bold;
            }

        }
        display:flex;
    }
    .actions{
        list-style-type:none;
        display:flex;
        li{
            border:1px solid rgba(0,0,0,0.3);
            border-radius:50%;
            width:35px;
            height:35px;
            margin-left:0.5rem;
            font-size:1rem;
            display:flex;
            justify-content:center;
            align-items:center;
            cursor:pointer;
            a{
                line-height:1;
                color:black;
            }
            &:hover a{
                color:gold;
            }
        }
    }
}

`
export const RightContent = styled.div`
position: relative;
overflow:hidden;
height:400px;
`
export const LeftContent = styled.ul`
list-style-type:none;
padding:0;
margin:0;
li{
    font-size:1.3rem;
    padding:0.5rem;
    border-radius:5px;
    &:hover{
        background:gold;
    }
    a{
        color:black;
        text-decoration:none;
        display:block;
        svg{
            margin-right:1rem;
        }

    }
}
`
export const LearnArea = styled.div`
display:grid;
grid-template-columns:1fr 3fr;
padding:2rem 0rem;
`
export const WrapTermInfo=styled.div`
padding:1rem 20rem;
background: rgb(246,247,251);
.edit-btn
{
    border:none;
    padding:1.5rem 1.5rem;
    background:rgb(60,207,207);
    color:white;
    font-weight:bold;
    font-size:1rem;
    border-radius:5px;
    text-align:center;
    width:60%;
    margin:0px auto;
    display:block;
    text-decoration:none;
    &:hover{
        background:rgb(40,167,167);
    }
}
`
export const TermInfo=styled.div`
.learning{
    display:flex;
    justify-content:space-between;
    .choose-btn{
        border-radius:5px;
        border:1px solid rgb(233,235,242);
        padding:0.5rem;
        color:rgb(60,207,207);
        font-weight:bold;
        height:fit-content;
        cursor:pointer;
        background:white;
        &:hover{
            color:gold;
        }
    }
}
`