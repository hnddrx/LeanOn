import axios from 'axios';
//Components
import ProfileComponents from '../components/ProfileComponents';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

//Hooks
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Div = styled.div`
display:flex;
`
const ProfilePage = () => {
    const clientInStorage = localStorage.getItem('userId');
    console.log(clientInStorage)
    useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/clients`).then( response => {
      setClients( response.data );
    })
  }, []);
  
  // State
  const [ clients, setClients ] = useState([]);
  const updateProfileFunction = ( newFirstName, newLastName, email, password, newAddress) => {
    let currProfile = clients;
    currProfile.push( { firstName: newFirstName, lastName: newLastName, email:email, password:password, address:newAddress} );
    console.log( currProfile );
    setClients( [ ...currProfile ] );
  }
  const client = clients.filter(client => {
        return clientInStorage === client._id
    }).map((client) => {
        return <ProfileComponents 
        key={client._id}
        firstName={client.firstName}
        lastName={client.lastName}
        email={client.email}
        address={client.address}
        password={client.password}
        updateProfileFunctionProps={updateProfileFunction}
        />
})
    return (
        <>
        <Nav />
        <Div>
                {
                    client
                }
            </Div>
            <Footer />
        </>
    )
}

export default ProfilePage