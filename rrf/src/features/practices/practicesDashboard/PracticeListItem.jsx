import React from 'react';
import { Segment, Button, Item, Icon, List } from 'semantic-ui-react'
import PracticeListAttendee from '../PracticeListAttendee';

export default function PracticeListItem({practice}) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={practice.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={practice.title} />
                            <Item.Description>
                                Hosted By {practice.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {practice.date}
                    <Icon name='marker' /> {practice.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                   {practice.attendees.map(attendee => (
                   <PracticeListAttendee key={attendee.id} attendee={attendee} />                    
                   ))}


                </List>
            </Segment>
            <Segment clearing> {/* Clears any previous floats */}
                <div>{practice.description}</div>
                <Button color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    )
}