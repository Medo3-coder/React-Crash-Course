import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <SayHallo/>
      <SayHallo/>
      <SayHallo/>
    </div>
  );
}

function SayHallo(){
  return <p>hello World</p>
}

export default App;
