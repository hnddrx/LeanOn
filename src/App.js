import './App.css';
//Pages
import Register from './pages/Register'
import Login from './pages/Login';
import Start from './pages/Start';
import PsychiatristPage from './pages/PsychiatristPage';
import Appointment from './pages/Appointment';
import ProfilePage from './pages/ProfilePage';
import DisplayAppointmentsPage from './pages/DisplayAppointmentsPage';
// Routing
import { Routes, Route } from 'react-router';
const App = () => {

  return (
    <div className='App'>

<Routes>
        <Route path='/' element={ <Start /> } />
        <Route path='/psychiatrist' element={ <PsychiatristPage /> } />
        <Route path='/book' element={ <Appointment /> } />
        <Route path='/appointment' element={ <DisplayAppointmentsPage /> } />
        <Route path='/profile' element={ <ProfilePage /> } />
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
  </Routes>
      

    </div>
  );
}

export default App;