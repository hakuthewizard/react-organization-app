import {Route, Routes} from 'react-router-dom';
import NotesPage from './Pages/NotesPage';
import ListsPage from './Pages/ListsPage';
import Navbar from './components/NavigationBar/Navbar';
import EditableCalendar from './Pages/CalendarPage';
import Welcome from './Pages/Welcome'
import './App.css';

function App() {
    return (
        <div>
            <Navbar/>
            <Welcome/>
            <main className='main'>
        <Routes>
            <Route path="/" element={<NotesPage />} exact/>
                
            <Route path="/notes" element={<NotesPage />} exact/>
                
            <Route path="/lists" element={<ListsPage />}/>
            <Route path="/calendar" element={<EditableCalendar />}/>
        </Routes>
        </main>
        </div>
    )
}
export default App;