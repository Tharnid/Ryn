import React, { useState } from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';

export default function PracticeForm({setFormOpen, setPractices, createPractice}) {
    const initialValues = {
        title: '',
        category: '',
        description: '',
        location: '',
        date: ''
    }

    // const [title, setTitle] = useState('');

    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {
        createPractice({
            ...values, 
            id: cuid(), 
            hostedBy: 'Terrell', 
            attendees: [], 
            hostPhotoURL: 'https://via.placeholder.com/150.png',
        });
        setFormOpen(false);
    }

    function handleInputChange(e) {
        const {name, value} = e.target; // destructuring the object
        setValues({...values, [name]: value}) // spread operator..spread values across individual properties
    }
    
    return (
        <Segment clearing>
            <Header content='Create new practice'/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input 
                        type="text" 
                        placeholder='Practice Title'
                        name='title' 
                        value={values.title} 
                        // onChange={(e) => setTitle(e.target.value)}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text" 
                        placeholder='Category'
                        name='category' 
                        value={values.category} 
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                    type="text" 
                    placeholder='Description'
                    name='description' 
                    value={values.description} 
                    onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                    type="text" 
                    placeholder='Location'
                    name='location' 
                    value={values.location} 
                    onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                    type="date" 
                    placeholder='Date'
                    name='date' 
                    value={values.date} 
                    onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button onClick={() => setFormOpen(false)} type='submit' floated='right'  content='Cancel' />
            </Form>
        </Segment>
    )
}