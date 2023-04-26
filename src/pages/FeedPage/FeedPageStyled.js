import styled from "styled-components";


export const PostBox = styled.section`
margin-bottom: 50px;


input{
display: flex;
margin: 0 auto;
width: 420px;
height: 180px;
border: none;
background: #EDEDED;
border-radius: 12px;
padding: 20px;
margin-top: 20px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
}
button{
display: flex;
margin: 0 auto;
align-items: center;
justify-content: center;
padding: 13px 145px;
gap: 10px;
width: 365px;
height: 47px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;
font-family: 'Noto Sans';
font-weight: 700;
font-size: 20px;
text-align: center;
color: #FFFFFF;
border: none;
margin-top: 20px;
}
::placeholder{
    color: #6F6F6F;
}
`