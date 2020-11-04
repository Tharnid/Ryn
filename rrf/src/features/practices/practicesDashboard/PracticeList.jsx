import React from 'react';
// import { Segment, Item } from 'semantic-ui-react';
import PracticeListItem from './PracticeListItem';

export default function PracticeList({practices}) {
    return (
        <>
            {practices.map(practice => (
            <PracticeListItem practice={practice} key={practice.id}/>                
            ))}

        </>
    )
}