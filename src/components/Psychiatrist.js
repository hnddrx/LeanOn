import React from 'react'
import '../assets/Psychiatrist.css'
import {Box, Image, Thead, Separator, Name,Email, DateTime} from '../styled/PsychiatristStyles'

const Psychiatrist = ({firstName, lastName, email, description, dayAvailable, timeAvailable, profilePic }) => {
  return (
    <>

    
    <Box>
      <table>
        <Thead>
          <tr>
            <th>
              <Image src={profilePic} alt='Profile' />
            </th>
          </tr>
        </Thead>
        <tbody>
          <tr>
            <td>
              <Name>{firstName} {lastName}</Name>
              <br/>
              <Email>{email}</Email>
              <br/>
              <DateTime><strong>Available</strong> <br/> {dayAvailable} {timeAvailable}</DateTime>
              <br/>
              <br/>
              <Separator>{description}</Separator>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
 
    
    </>
  )
}

export default Psychiatrist