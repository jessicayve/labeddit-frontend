import styled from "styled-components"



export const Container = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;

div{

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
p{
    font-family: 'Rubik', sans-serif;
    color:#FE7E02;
    font-weight: 600;
}
 `
export const Input = styled.input`
width: 360px;
height: 50px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
border: 1px solid #D5D8DE;
border-radius: 4px;
padding: 10px;
`
export const BtnContinuar = styled.button`
display: flex;
flex-direction: column;
margin: 0 auto;
align-items: center;
padding: 13px 133px;
width: 360px;
height: 50px;
border-radius: 27px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
font-family: 'Noto Sans';
font-weight: 700;
font-size: 18px;
text-align: center;
color: #FFFFFF;
border: none;
margin-top: 10px;

`

export const Line = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
height: 1px;
width: 40vw;
border: none;
margin-top: 20px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

export const Button = styled.button`
display: flex;
justify-content: center;
margin: 0 auto;
align-items: center;
padding: 13px 90px;
gap: 10px;
width: 360px;
height: 50px;
border: 1px solid #FE7E02;
border-radius: 27px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
text-align: center;
color: #FE7E02;
background-color: white;

`

