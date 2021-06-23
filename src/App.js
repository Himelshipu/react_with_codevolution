
import './App.css';
import Greet from './components/gret';
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Count from "./components/counter";

 // import {Greet} from './components/gret'

function App() {
  return (
    <div className="App">
         <Greet  name="bruce" heroName="Batman" />
          <Greet  name="clark" heroName="superman" >
                 this is the children of superman props
          </Greet>
         <Greet  name="mike" heroName="ironman" />

        <Welcome name="bruce" heroName="Batman" />
        <Welcome name="clark" heroName="superman" />
        <Hello/>
        <Message/>
        <Count/>
    </div>
  );
}

export default App;
