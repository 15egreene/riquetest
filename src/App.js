import logo from './logo.svg';
import './App.css';
import test from '../src/images/test.mp4'

function App() {
  return (
    <div className="App">
      lol
      <video loop autoPlay muted>
        <source src={test} type='video/mp4' />
         
      </video>
    </div> 
  );
}

export default App;
