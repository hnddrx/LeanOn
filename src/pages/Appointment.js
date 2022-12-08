import axios from 'axios';
//Hooks
import Nav from '../components/Nav'
import Footer from '../components/Footer'
//React Hooks
import { useEffect, useState } from 'react';
//Components
import AppointmentComp from '../components/AppointmentComp';
const Appointment = () => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/appointments').then( response => {
          console.log( response );
          setAppointments( response.data );
        })
      }, []);

    const [ appointments, setAppointments ] = useState([]);
    const addAppointmentFunction = ( client, psychiatrist, answer, answerOne, answerTwo) => {
        let currAppointments = appointments;
        currAppointments.push( { clients: client, psychiatrists: psychiatrist, answer:answer, answerOne:answerOne, answerTwo:answerTwo} );
        console.log( currAppointments );
        setAppointments( [ ...currAppointments ] );
      }
  return (
    <div>
      <Nav />
      <AppointmentComp addAppointmentFunctionProps = {addAppointmentFunction} appointments={appointments} />\
      <Footer />
    </div>
  )
}
export default Appointment