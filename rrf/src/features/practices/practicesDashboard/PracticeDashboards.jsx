import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import PracticeForm from '../eventFrom/PracticeForm';
import PracticeList from './PracticeList';
import {sampleData} from '../../../app/api/sampleData';

export default function PracticeDashboard({formOpen, setFormOpen}) {
    const [practices, setPractices] = useState(sampleData);

    function handleCreatePractice(practice) {
        setPractices([...practices, practice])
    }
    
    return (
        <Grid>
            <Grid.Column width={10}>
                <PracticeList practices={practices} /> {/* Passed to child as an object */}
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&
                <PracticeForm 
                    setFormOpen={setFormOpen} 
                    setPractices={setPractices} 
                    createPractice={handleCreatePractice} 
                />}
            </Grid.Column>
        </Grid>
    )
}