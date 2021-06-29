
import './App.css';
import {Button, SecondButton} from './components/Buttons';

//inline css
//app css
//css variables
//file css

function App() {
  return (
    <div>
      <Button>
        Click Me
      </Button>

      <SecondButton>
        Click Me 2
      </SecondButton>
      {/* <h1>styled Components</h1>
      <h1 style={{color:"red", textTransform:"uppercase"}}>Inline css</h1>
      <h1 className="global">Global css</h1>
      <h1 className="first">First</h1>
      <h1 className="second">Second</h1> */}
    </div>
  );
}

export default App;
