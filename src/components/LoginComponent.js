import axios from 'axios'
//Image
import loginImage from '../assets/logopic.jpg'
import { Link } from 'react-router-dom'
//Navigate
import { useNavigate } from 'react-router';
//Styles
import { Main, Separate, Image, Container, Input } from '../styled/LoginStyles';
import '../assets/Login.css' 
//Hooks
import {useState} from 'react';

const RegisterComponent = ( ) => {
    const navigate =useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [login, setLogin] = useState(false);
    const onLoginHandler = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // set configurations
    const configuration = {
        method: 'post',
        url: 'http://localhost:8000/api/v1/auth/Client/login',
        data: {
          email,
          password,
        },
      };
    // make the API call
    axios(configuration)
      .then((result) => {
        console.log(result)
        // We will use localStorage to store User details
        localStorage.setItem('userId', result.data.id);
        setLogin(true);
        navigate('/psychiatrist');
      })
      .catch((error) => {
        alert(error.response.data.status)
     
      });
    }

return (
    <Main className='container-container'>
    <Container>
    <Separate>
        <Image >
            <img src={loginImage} alt='Logo'/>
        </Image>
        <div className='form-container'>
            <form onSubmit={(e)=>onLoginHandler(e)}>
                <label>Email address</label>
                <br/>
                <Input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter email'
                    />
                <br/>
                <label>Password</label>
                <br/>
                <Input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <br/><br/>
                <div className='center'>
                    <button type='submit'>
                        Login
                    </button>
                    <br/><br/>
                    <Link to='/register'>Create Account?</Link>
                </div>
            </form>
            </div>
        </Separate>
        </Container>
    </Main>
    )
}

export default RegisterComponent