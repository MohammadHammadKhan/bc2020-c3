import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

function App(props) {
  return <div>Hello from {props.name} and age is {props.age-10}
  <br/>
  <Hello name={props.name}>RS</Hello>
  </div>
}

export default App;
