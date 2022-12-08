import axios from 'axios'
import styled from 'styled-components'   
const Td = styled.td`
padding:20px 1px 15px 1px;

`

const DisplayAppointment = ({answer,answerOne,answerTwo,dateCreated,scheduledDate, id}) => {
    const deleteId = id
    console.log(deleteId)
    const OnClickDelete = ( event ) => {
        event.preventDefault(); // prevent from page reload
        axios.delete(`http://localhost:8000/api/v1/appointments/${deleteId}`).then(result => {
        console.log(result)    
        window.location.reload(false);
        })
    }
  return (
    <>
        <tr>
            <Td>
                {id}
            </Td>
            <Td>
                {answer}
            </Td>
            <Td>
                {answerOne}
            </Td>
            <Td>
                {answerTwo}
            </Td>
            <Td>
                {dateCreated}
            </Td>
            <Td>
                {scheduledDate}
            </Td>
            <Td>
                <button onClick={OnClickDelete} style={{background: 'orange', border: 'none'}}>Cancel</button>
            </Td>
        </tr>
      
        </>
    )
}

export default DisplayAppointment