import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const sidebar = {
    gridArea: 'sidebar',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    backgroundColor: 'gray',
    color: 'white',
    textTransform: 'capitalize'
}

export class Sidebar extends Component { 
    render() {
        const { data } = this.props;
        const dataPoints = [
            { label: "latitude" , value: data.lat },
            { label: "longitude" , value: data.lng },  
            { label: "course" , value: data.cou },
            { label: "speed" , value: data.spd },  
            { label: "altitude" , value: data.alt },
            { label: "voltage" , value: data.vol },  
            { label: "current" , value: data.cur }
        ];

        return (
            <div style={sidebar}>
                <div>
                    <List>
                        {dataPoints.map((dataPoint) => (
                        <ListItem button key={dataPoint.label}>
                            <ListItemText 
                            primary={`${dataPoint.label}: ${dataPoint.value}`}
                            />
                        </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        )
    }
}