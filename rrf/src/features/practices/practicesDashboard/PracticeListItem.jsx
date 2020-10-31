import React from 'react';
import { Segment, Button, Item, Icon, List } from 'semantic-ui-react'
import PracticeListAttendee from '../PracticeListAttendee';

export default function PracticeListItem() {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='https://via.placeholder.com/150' />
                        <Item.Content>
                            <Item.Header content='Practice Title' />
                            <Item.Description>
                                Hosted By SirGirth
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> Date
                    <Icon name='marker' /> Location
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                   <PracticeListAttendee />
                   <PracticeListAttendee />
                   <PracticeListAttendee />
                   <PracticeListAttendee />
                   <PracticeListAttendee />
                </List>
            </Segment>
            <Segment clearing> {/* Clears any previous floats */}
                <div>Description of Event</div>
                <Button color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    )
}