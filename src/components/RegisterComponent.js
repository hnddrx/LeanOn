import axios from 'axios'
import {useState} from 'react';
import {Link} from 'react-router-dom'
import {Container, FormContainer, Center, Input} from '../styled/RegistrationStyle'
const RegisterComponent = ({addClientFunctionProps, clients}) => {
    const [clientFname, setClientFname] = useState('');
    const [clientLname, setClientLname] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPassword, setClientPassword] = useState('');
    const [clientAddress, setClientAddress] = useState('');

    const [ hasError, setHasError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState('');

    const hideAlert = (timeOut) => {
        setTimeout(() => {
        setErrorMessage('')
        setHasError('');
        }, timeOut);
    };

    const onSubmitFormHandler = ( event ) => {
        event.preventDefault(); // prevent from page reload
        //alert(`Form has been submitted`);

        /* 
            We check for the value of the input
        */
        if( clientAddress.trim() === '' || clientEmail.trim() === '' || clientFname.trim() === '' || clientLname.trim() === '' || clientPassword.trim() === ''){
           // This means that, the input is EMPTY
           // Need to show the error message
            setHasError( true );
            setErrorMessage('A field cannot be empty!');
            hideAlert(1500);
        }
        else if( clients.some( client => client.email.trim().toLowerCase() === clientEmail.trim().toLowerCase() )){
            setHasError( true );
            setErrorMessage(`${clientEmail} already exists.`);
            hideAlert(1500);
        }
        else{
            axios.post('http://localhost:8000/api/v1/auth/Client/register', {
                firstName: clientFname,
                lastName: clientLname,
                email: clientEmail,
                password: clientPassword,
                address: clientAddress
            });
            addClientFunctionProps( clientFname );
            addClientFunctionProps( clientLname );  
            addClientFunctionProps( clientEmail ); 
            addClientFunctionProps( clientPassword ); 
            addClientFunctionProps( clientAddress ); 

            setClientFname(''); 
            setClientLname('');   
            setClientEmail('');
            setClientPassword('');    
            setClientAddress('');
            setHasError( false );
            
        }
    }

return (
    <Container>
        <FormContainer> 
            <h2>Register</h2>
        <form onSubmit={ onSubmitFormHandler } >
            {/* <label>Task Name</label> */}
            <p>First Name</p>
            <Input 
                type='text'
                value={ clientFname }
                onChange={ e => setClientFname(e.target.value) } 
            />
             <p>Last Name</p>
            <Input 
                type='text'
                value={ clientLname }
                onChange={ e => setClientLname(e.target.value) } 
            />
             <p>Email</p>
            <Input 
                type='text'
                value={ clientEmail }
                onChange={ e => setClientEmail(e.target.value) } 
            />
              <p>Password</p>
            <Input 
                type='password'
                value={ clientPassword }
                onChange={ e => setClientPassword(e.target.value) } 
            />
            <p>address</p>
            <Input 
                type='text'
                value={ clientAddress }
                onChange={ e => setClientAddress(e.target.value) } 
            />
            <br/>
            {/* Conditional rendering for error */}
            { hasError && <small style={{color: 'red', textAlign: 'center'}}>{ errorMessage }</small> }

            <br/>
            <Center>
            <button type='submit' style={{ background: '#778D45', border:'1px solid #778D45'}}>
                Register
            </button>
            </Center>
            <br />
            <Center>
            <Link to='/login' style={{textDecoration: 'none'}}>Login?</Link>
            </Center>
        </form>
    </FormContainer>
    </Container>
  )
}

export default RegisterComponent