import './App.css';
import Context from './Component/Context';
import Student from './Component/Student';
import State from './Component/State';
import Effect from './Component/Effect'
import Reducer from './Component/Reducer';



function App() {
  return (
    <div className="App">
       <State/>
      <Effect/> 
      <Student>
      <Context/>
     </Student>
     <Reducer/>
    </div>
  );
}

export default App;
