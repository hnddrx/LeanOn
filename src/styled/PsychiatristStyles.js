import styled from 'styled-components';
export const Box = styled.div`
  margin:auto;
  text-align: center;
  background-color:white;
  width:40%;   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`
export const Image = styled.img`
margin-top:70px;
border-radius:10px;
width: 200px;
`
export const Div = styled.div`
width:400px;
display:flex;
justify-content:space-between;
`
export const Separator = styled.div`
   margin-top:8px;
   margin-bottom:30px;
   width:100%;
   text-align: justify;
   text-indent: 2em;
`
export const Name = styled.span`
    font-size:25px;
    width:300px;
    font-weight:bold;
`
export const DateTime = styled.span`
  width:200px;
  font-size:13px;
`
export const Email = styled.span`
    font-size:18px;
`
export const Thead = styled.thead`
display:flex;
justify-content:center;
`