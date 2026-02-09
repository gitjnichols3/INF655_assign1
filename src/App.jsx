import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import './App.css'

function App() {
  const tasks = ["Eat a salad", "Go for a walk", "Take your supplements"];

  function getRandomTask(){
    const index = Math.floor(Math.random() * tasks.length);
    return (
        tasks[index]
    );
  }

  

  return (
    <div>
      <Greeting />
      <UserInfo />
      <TaskComponent task={getRandomTask()} />
    </div>
  );
}

export default App
