import axios from 'axios';
//Hooks
import { useEffect, useState } from 'react';
import RegisterComponent from '../components/RegisterComponent';
const Register = () => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/clients').then( response => {
          console.log( response );
          setClients( response.data );
        })
      }, []);

    const [ clients, setClients ] = useState([]);
    const addClientFunction = ( clientFname, clientLname, clientEmail, clientPassword, clientAddress) => {
        let currClients = clients;
        currClients.push( { firstName: clientFname, lastName: clientLname, email:clientEmail, password: clientPassword, address:clientAddress } );
        console.log( currClients );
        setClients( [ ...currClients ] );
      }
  return (
    <div>
      <RegisterComponent addClientFunctionProps = {addClientFunction} clients={clients} />
    </div>
  )
}
export default Register;