import React, {Fragment} from 'react';
import NavBar from '../../features/nav/NavBar';
import PracticeDashboard from '../../features/practices/practicesDashboard/PracticeDashboards';
import {  Container } from 'semantic-ui-react';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className='main'>
        <PracticeDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
