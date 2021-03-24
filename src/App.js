//eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'asdad1',
        day: 'Feb 1st at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'asdad2',
        day: 'Feb 2nd at 2:30pm',
        reminder: false
    },
    {
        id: 3,
        text: 'asdad3',
        day: 'Feb 3rd at 2:30pm',
        reminder: true
    },{
        id: 4,
        text: 'asdad4',
        day: 'Feb 4th at 2:30pm',
        reminder: false
    }
])

const deleteTask = (id) => {
 setTasks(tasks.filter((task)=>{
   return task.id !== id
 }))
}

const toggleReminder = id => {
  console.log(id)
}
  return (
    <div className="container">
      <Header title='Hello'/>   
      {tasks.length > 0 ? (
        <Tasks tasks = {tasks} onDelete={deleteTask}/>
      ) : (
        'No Tasks To Show'
      )} 
        
    </div>
  );
}

export default App;
