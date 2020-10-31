import React from 'react';
import { Grid } from 'semantic-ui-react';
import PracticeForm from '../eventFrom/PracticeForm';
import PracticeList from './PracticeList';

export default function PracticeDashboard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <PracticeList />
            </Grid.Column>
            <Grid.Column width={6}>
                <PracticeForm />
            </Grid.Column>
        </Grid>
    )
}