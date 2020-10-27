import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function PracticeDashboard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <h3>Left Col</h3>
            </Grid.Column>
            <Grid.Column width={6}>
                <h3>Right Col</h3>
            </Grid.Column>
        </Grid>
    )
}