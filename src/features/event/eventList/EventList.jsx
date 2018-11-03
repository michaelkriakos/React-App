import React, { Component } from 'react'
import EventListItem from '../../event/eventList/EventListItem'

class EventList extends Component {
  render() {
    return (
      <div>
        <h1>EventList</h1>
<EventListItem/>
<EventListItem/>
<EventListItem/>
<EventListItem/>
      </div>
    )
  }
}
export default EventList
