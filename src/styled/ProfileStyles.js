import styled from "styled-components";
export const Main =styled.div`

width:100%;
height: 74vh;
`
export const ProfileContainer = styled.div`
    display:flex;
    margin:auto;
    justify-content:center;
`
export const FormContainer = styled.div`
    background:white;
    border-radius:5px;
    padding:20px 70px;
    margin-top:30px;
`
export const Button = styled.button`
background-color: #778D45;
color:white;
width:100px;
border: 1px solid #778D45; 
&:hover{
    background-color: #373f25;
}
`
export const Center = styled.div`
text-align:center;
display:flex;
justify-content:center;

`
export const Input = styled.input`
width:700px;
margin: 0px 0;
padding:5px ;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`
export const Select = styled.select`
width: 100%;
margin: 0px 0;
padding:5px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;`