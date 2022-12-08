import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:center;
`
export const FormContainer = styled.div`
    border:1px solid rgb(0, 0, 0, 0.3);
    background:rgb(230, 235, 235);
    border-radius:5px;
    padding:20px 30px;
    margin:5% auto auto auto;
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
width: 400px;
margin: 0px 0;
padding:5px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`