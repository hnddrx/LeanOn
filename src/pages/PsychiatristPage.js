import axios from 'axios';
//Components
import Psychiatrist from '../components/Psychiatrist';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

//Hooks
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Div = styled.div`
display:flex;
flex-wrap:wrap;
` 
const PsychiatristPage = () => {
    useEffect(() => {
    axios.get('http://localhost:8000/api/v1/psychiatrists').then( response => {
        setPsychiatrists( response.data );
    })
  }, []);


  // State
  const [ psychiatrists, setPsychiatrists ] = useState([]);

const psychiatrist =psychiatrists.map(psychiatrist => {
    return <Psychiatrist 
    key={psychiatrist._id}
    firstName={psychiatrist.firstName}
    lastName={psychiatrist.lastName}
    email={psychiatrist.email}
    profilePic={psychiatrist.profilePic}
    description={psychiatrist.description}
    dayAvailable={psychiatrist.dayAvailable}
    timeAvailable={psychiatrist.timeAvailable}
    />
})
    return (
        <>
        <Nav />
        <Div>
                {
                psychiatrist 
                }
            </Div>
            <Footer />
        </>
    )
}

export default PsychiatristPage