import {Route, Routes,Redirect} from 'react-router-dom';
import { Fragment } from 'react';
import NotesPage from './Pages/NotesPage';
import ListsPage from './Pages/ListsPage';
import Navbar from './components/NavigationBar/Navbar';
import EditableCalendar from './Pages/CalendarPage';
import './App.css';

function App() {
    return (
        <div>
            <Navbar/>
            <main className='main'>
        <Routes>
            <Route path="/notes" element={<NotesPage />}/>
                
            <Route path="/lists" element={<ListsPage />}/>
            <Route path="/calendar" element={<EditableCalendar />}/>
        </Routes>
        </main>
        </div>
    )
}
export default App;