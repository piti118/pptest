import { Tabs } from 'material-ui/index';
import React, { Component } from 'react';
import { Tab } from 'material-ui/Tabs/index';

function RoomInfo({roomInfo}) {
  if(!roomInfo){return null;}
  return  (
    <div>
      Name: {roomInfo.name}
      <br/>
      Floor: {roomInfo.floor}
    </div>
  )
}

export default class TopBar extends Component {
  state = {
    currentRoom: null,
    data: {
      room1: { name: 'Room1', floor: 1 },
      room2: { name: 'Room2', floor: 2 },
      room3: { name: 'Room3', floor: 3 },
      room4: { name: 'Room4', floor: 4 },
      room5: { name: 'Room5', floor: 5 },
      room6: { name: 'Room6', floor: 6 },
      room7: { name: 'Room7', floor: 7 },
      room8: { name: 'Room8', floor: 8 },
      room9: { name: 'Room9', floor: 9 }
    }
  }

  handleChange = (e, v) => {
    this.setState({ currentRoom: v })
  }

  render() {
    const {data, currentRoom} = this.state
    return (
      <div>
        <Tabs
          value={currentRoom || 'room1'}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="auto"
        >
          {Object.keys(data).map(k => {
            const room = data[k]
            return <Tab label={room.name} value={k} key={k}/>
          })}
        </Tabs>
        <RoomInfo roomInfo={data[currentRoom]}/>
      </div>
    )
  }
}