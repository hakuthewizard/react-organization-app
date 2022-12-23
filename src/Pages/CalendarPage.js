import React,{useState} from 'react'
import Calendar from 'react-calendar'
import './CalendarPage.css'
import { Modal } from 'react-bootstrap';

const EditableCalendar = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [reminders,setReminders] =useState([]);
    const [selectedDate,setSelectedDate]=useState('')
  

    const setReminderHandler = (reminder) => {
      setReminders([...reminders, {date: selectedDate,reminder}])
      
    }

return (
  
    <div>
    <h1 className='text-center'>Calendar</h1>
    <div className='calendar-container'>
      <Calendar 
      className="thecalendar"
      onClickDay={(value) => {
        setSelectedDate(value);
        setShowModal(true);
      }}
    
      />
      
       <Modal show={showModal}
       >
      <Modal.Body>
      <h2 style = {{textAlign:"center"}}>Enter Reminder</h2>
        <form  className='modalform' onSubmit={(e)=> {
          e.preventDefault();
          setReminderHandler(e.target.reminder.value)
          setShowModal(false)
        }}> 
          
          <label style= {{alignSelf:"center", fontWeight:"bold"}}>Reminder</label>
          <input id="reminder"
          />
          <button className="setreminder_button" type="submit">Set Reminder</button>
          </form>
          <button 
          className="modal_close_button" onClick={() => setShowModal(false)}>Close</button>
      </Modal.Body>
      
      </Modal>
      <ul className='reminder_items'>
          {reminders.map((reminder) => (
            <div key={reminder.date}>
              <p className='reminder_items_date'>Date: {reminder.date.toLocaleString('en-US',{
              month: 'long',
              day: 'numeric',
              year: 'numeric'})}</p>
              <h4 className='reminder_items_text'>Reminder: {reminder.reminder}</h4>
            </div>
          ))}
          </ul>
      
</div>
  </div>
)

}
export default EditableCalendar;