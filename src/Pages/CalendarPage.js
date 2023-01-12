import React,{useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import './CalendarPage.css'
import { Modal } from 'react-bootstrap';
import { createPortal } from 'react-dom';


const Backdrop = props => {
  return <div className='backdrop'></div>
};



const ModalOverlay = ({ setReminderHandler, setShowModal }) => {
  const [reminders, setReminders] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className='modaloverlay' >
      <div >
        <h2 style={{ textAlign: "center" }}>Enter Reminder</h2>
        <form className='modalform' onSubmit={(e) => {
          e.preventDefault();
          setReminderHandler(e.target.reminder.value);
          setShowModal(false);
        }}>
          <label style={{ alignSelf: "center", fontWeight: "bold" }}>Reminder</label>
          <input id="reminder" />
          <button className="setreminder_button" type="submit">Set Reminder</button>
        </form>
        <button
          className="modal_close_button"
          onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};




const CalendarPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const storedReminders = localStorage.getItem('reminders');
    if (storedReminders) {
      setReminders(JSON.parse(storedReminders));
    }
  }, []);

  const setReminderHandler = (reminder) => {
    setReminders([...reminders, { date: new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year:'numeric'
    }), reminder }]);
      localStorage.setItem('reminders', JSON.stringify([...reminders, { date: new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year:'numeric'
    }), reminder }]));
    
  };

  const deleteReminder = (index) => {
    setReminders(reminders.filter((reminder, i) => i !== index));
    localStorage.setItem('reminders', JSON.stringify(reminders.filter((reminder, i) => i !== index)));
  };

  return (
    <React.Fragment>
  <div>
  {showModal ? createPortal(<Backdrop />, document.getElementById('backdrop-root')) : null}
  {showModal && (
    <div>
      {createPortal(
        <ModalOverlay
          setReminderHandler={setReminderHandler}
          setShowModal={setShowModal}
        />,
        document.getElementById('overlay-root')
      )}
    </div>
  )}
  <div className="calendar-container">
    <Calendar
      className="thecalendar"
      onClickDay={(value) => {
        setSelectedDate(value);
        setShowModal(true);
      }}
    />
  </div>
        <ul className='ul_body'>
        {reminders.map((reminder, index) => (
  <div key={index} className='reminder_items'>
    <p className='reminder_items_date'>
      Date: {reminder.date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year:'numeric'
      })}
    </p>
    <h4 className='reminder_items_text'>Reminder: {reminder.reminder}</h4>
    <button className='delete-reminder' onClick={() => deleteReminder(index)}>Delete</button>
  </div>
))}
      
              </ul>
              </div>
              </React.Fragment>
              );
              };
              
              export default CalendarPage;
