import React from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';

export default function PracticeForm() {
    return (
        <Segment clearing>
            <Header content='Create new practice'/>
            <Form>
                <Form.Field>
                    <input type="text" placeholder='Practice Title'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Category'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Location'/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder='Date'/>
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button type='submit' floated='right'  content='Cancel' />
            </Form>
        </Segment>
    )
}