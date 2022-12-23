import React,{useState, useSyncExternalStore} from 'react'
import Calendar from 'react-calendar'
import './CalendarPage.css'
import 'react-calendar/dist/Calendar.css';


const EditableCalendar = (props) => {
    const [date, setDate] = useState(new Date())

return (
    <div className='app'>
    <h1 className='text-center'>Calendar</h1>
    <div className='calendar-container'>
      <Calendar 
      className="thecalendar"
      onChange={setDate} value={date}

      />
</div>
  </div>
)

}
export default EditableCalendar;