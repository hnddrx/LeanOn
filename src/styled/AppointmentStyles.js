import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:center;
    text-align: center;
`
export const FormContainer = styled.div`
    background:white;
    border-radius:5px;
    padding:20px 70px;
    margin:84px auto 10px auto;
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

export const Success = styled.small`
color:white;
text-align: center;
font-size:15px;
padding:5px;
margin-bottom:20px;
background:green;
`
export const Error = styled.small`
color:white;
text-align: center;
font-size:15px;
padding:5px;
margin-bottom:20px;
background:red;
`