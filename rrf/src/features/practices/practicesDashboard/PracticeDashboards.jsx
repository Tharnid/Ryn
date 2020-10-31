import React from 'react';
import { Grid } from 'semantic-ui-react';
import PracticeList from './PracticeList';

export default function PracticeDashboard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <PracticeList />
            </Grid.Column>
            <Grid.Column width={6}>
                <h3>Right Col</h3>
            </Grid.Column>
        </Grid>
    )
}