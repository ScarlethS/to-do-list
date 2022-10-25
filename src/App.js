// import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import ListOfTasks from './components/ListOfTasks';

function App() {
  return (
    <div className='App'>
        <div className='to-do-list-app'>
          <div className='freecocamp-logo-container'> 
          <img src={freeCodeCampLogo} className="freeCodeCamp-logo" alt="logo" />
          </div>
          <div className='to-do-list-main-container'>
            <h1>My To Do List</h1>
            {/* <Mytask text='Learn React'/> */}
            <ListOfTasks />
          </div>
        </div>
    </div>
  );
}

export default App;
