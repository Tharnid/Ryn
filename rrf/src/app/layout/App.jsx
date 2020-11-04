import React, {useState} from 'react';
import NavBar from '../../features/nav/NavBar';
import PracticeDashboard from '../../features/practices/practicesDashboard/PracticeDashboards';
import {  Container } from 'semantic-ui-react';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <PracticeDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

