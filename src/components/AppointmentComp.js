import axios from 'axios'
import {useState} from 'react';
//Styled Components
import {Container, FormContainer, Center, Input, Select, Success, Error} from '../styled/AppointmentStyles'

const AppointmentComp = ({addAppointmentFunctionProps}) => {
    //Store ID to the localStorage
    const clientInStorage = localStorage.getItem('userId');
    //State
    const [client, setClient] = useState( clientInStorage );
    const [psychiatrist, setPsychiatrist] = useState('');
    const [answer, setAnswer] = useState('');
    const [answerOne, setAnswerOne] = useState('');
    const [answerTwo, setAnswerTwo] = useState('');
    const [ success, setSuccess ] = useState( false );
    const [ successMessage, setSuccessMessage ] = useState('');
    const [error, setError] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');
    const onSubmitFormHandler = ( event ) => {
        const hideAlert = (timeOut) => {
            setTimeout(() => {
            setErrorMessage('')
            setSuccessMessage('');
            }, timeOut);
        };
        const reload = (timeOut) => {
            setTimeout(() => {
                window.location.reload(false);
            }, timeOut);
        };
        if(answer === '' || answerOne === '' || answerTwo === '' || psychiatrist === '') {
            event.preventDefault();
            setError( true );
            setErrorMessage(`A field cannot be empty`);
            hideAlert(1700);
            reload(1000);
        }
        else{
            event.preventDefault(); // prevent from page reload
                axios.post('http://localhost:8000/api/v1/appointments', {
                    clients: client,
                    psychiatrists: psychiatrist,
                    answer: answer,
                    answerOne: answerOne,
                    answerTwo: answerTwo
                });

                addAppointmentFunctionProps( client );
                addAppointmentFunctionProps( psychiatrist );  
                addAppointmentFunctionProps( answer ); 
                addAppointmentFunctionProps( answerOne ); 
                addAppointmentFunctionProps( answerTwo ); 
                // Clear the content of the input
                setClient(''); 
                setPsychiatrist('');   
                setAnswer('');
                setAnswerOne('');
                setAnswerTwo('');
                //Success message
                setSuccess( true );
                setSuccessMessage(`Appointment Added Successfully`);
                hideAlert(1700);
                reload(1000);
        }
        }
    return (
        <>
        <Container>
            <FormContainer>
            { success && <Success className='error'>{ successMessage }</Success> }
            { error && <Error className='error'>{ errorMessage }</Error> }

                <form onSubmit={ onSubmitFormHandler } >
                    {alert}
                    {/* <label>Task Name</label> */}
                    <Input 
                        type='hidden'
                        value={ client }
                        onChange={ e => setClient(e.target.value) } 
                    />
                    <p>Psychiatrist</p>
                    <Select name='psychiatrists' id='psychiatrists' onChange={ e => setPsychiatrist(e.target.value) } required>
                        <option>Select Psychiatrist</option>
                        <option value='63797fed80235bef09998e8f'>Meca Nism</option>
                        <option value='6379804a80235bef09998e91'>Madrid Willie</option>
                        <option value='637980bd80235bef09998e93'>Martha Kayi</option>
                        <option value='6379e089c0f1ac36cbdf998f'>Mery Leon</option>
                        <option value='637b2951c9a60c28748a492b'>Nelson Martinez</option>
                    </Select>
                    <p>How are you? </p>
                    <Input 
                        type='text'
                        value={ answer }
                        onChange={ e => setAnswer(e.target.value) } 
                    />
                    <p>Does anyone in your family have a psychiatric history?</p>
                    <Input 
                        type='text'
                        value={ answerOne }
                        onChange={ e => setAnswerOne(e.target.value) } 
                    />
                    <p>What do you feel? </p>
                    <Input 
                        type='text'
                        value={ answerTwo }
                        onChange={ e => setAnswerTwo(e.target.value) } 
                    />
                    <br/><br/>
                    <Center>
                        <button type='submit'>
                            Add Appointment
                        </button>
                    </Center>
                </form>
            </FormContainer>
        </Container>
        </>
    )
}
export default AppointmentComp