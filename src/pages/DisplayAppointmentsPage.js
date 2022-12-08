import axios from 'axios';
//Components
import DisplayAppointment from '../components/DisplayAppointment';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

//Hooks
import { useEffect, useState } from 'react';
import { Div, Table, DivContainer} from '../styled/Display';

const DisplayAppointmentsPage = () => {
    const clientInStorage = localStorage.getItem('userId');
    
    useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/appointments`).then( response => {
        console.log(response)
        setAppointments( response.data );
    })
  }, []);
  
  // State
  const [ appointments, setAppointments ] = useState([]);
  const appointment = appointments.filter(appointment => {
    return clientInStorage === appointment.clients
}).map((appointment) => {
    return <DisplayAppointment 
    key={appointment._id}
    id={appointment._id}
    psychiatrists={appointment.psychiatrists}
    answer={appointment.answer}
    answerOne={appointment.answerOne}
    answerTwo={appointment.answerTwo}
    dateCreated={appointment.dateCreated}
    scheduledDate={appointment.scheduledDate}
    />
    
})
    return (
        <>
            <Nav/>
            <br/>
            <DivContainer>
            <Div>
                <Table>
                    <thead>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Answer 1</th>
                            <th>Answer 2</th>
                            <th>Answer 3</th>
                            <th>Date Created</th>
                            <th>Schedule</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            appointment
                        }
                    </tbody>
                </Table>
            </Div>
            </DivContainer>
            <Footer />
        </>
    )
}

export default DisplayAppointmentsPage