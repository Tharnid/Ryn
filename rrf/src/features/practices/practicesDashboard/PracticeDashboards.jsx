import React from 'react';
import { Grid } from 'semantic-ui-react';
import PracticeForm from '../eventFrom/PracticeForm';
import PracticeList from './PracticeList';
import {sampleData} from '../../../app/api/sampleData';

export default function PracticeDashboard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <PracticeList practice={sampleData} /> {/* Passed to child as an object */}
            </Grid.Column>
            <Grid.Column width={6}>
                <PracticeForm />
            </Grid.Column>
        </Grid>
    )
}