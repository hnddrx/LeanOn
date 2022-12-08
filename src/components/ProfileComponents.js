import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {ProfileContainer, FormContainer, Center, Input,Main} from '../styled/ProfileStyles'
const ProfileComponents = ({updateProfileFunctionProps,firstName,lastName,email,address,password}) => {
  //Get Id from local storage
  const clientInStorage = localStorage.getItem('userId');

  const [newFirstName, setFirstName] = useState(firstName);
  const [newLastName, setLastName] = useState(lastName);

  const [newAddress, setAddress] = useState(address);

  console.log(newFirstName);
  const onSubmitFormHandler = ( event ) => {
      event.preventDefault(); // prevent from page reload
      //alert(`Form has been submitted`);
      if( newFirstName.trim() === '' && newLastName.trim() === '' && newAddress.trim() === '' ){
        // This means that, the input is EMPTY
        // Need to show the error message
            setFirstName(''); 
            setLastName('');   
            setAddress('');
     
     }else{

       axios.put(`http://localhost:8000/api/v1/clients/${clientInStorage}`, {
         firstName: newFirstName,
         lastName: newLastName ,
         email: email,
         password: password,
         address: newAddress
       });
     }
          // This is valid INPUT
          updateProfileFunctionProps( newFirstName );
          updateProfileFunctionProps( newLastName );  
          updateProfileFunctionProps( newAddress ); 
          setFirstName(''); 
          setLastName('');   
          setAddress('');
          window.location.reload(false);
          // Clear the content of the inpu
  }
  return (
    <Main>
    <ProfileContainer>
      <div>
        <FormContainer>
            <form onSubmit={ onSubmitFormHandler } >     
                <p>First Name</p>
                <Input 
                    type='text'
                    value={newFirstName }
                    placeholder='Set new first name here...'
                    onChange={ e => setFirstName(e.target.value) } 
                />
                <p>Last Name</p>
                <Input 
                    type='text'
                    value={ newLastName }
                    placeholder='Set new last name here...'
                    onChange={ e => setLastName(e.target.value) } 
                />
                <p>Email</p>
                <Input 
                    type='text'
                    value={ email }
                    placeholder='Set new email here...'
                    disabled
                />
                <p>Password </p>
                <Input 
                    type='text'
                    value={password}
                    disabled
                />
                <p>Address</p>
                <Input 
                    type='text'
                    value={ newAddress }
                    placeholder='Set new address here...'
                    onChange={ e => setAddress(e.target.value) } 
                />
                
                <br/><br/>
                <Center>
                <button type='submit' style={{ background: '#778D45', border:'1px solid #778D45'}}>
                    Update
                </button>
                </Center>
            </form>
        </FormContainer>
    </div>
</ProfileContainer>
</Main>
  )
}

export default ProfileComponents