import './App.css';
import CounterClass from './components/CounterClass';
import CounterHook from './components/CounterHook';
import UserHooks from './components/UserHooks';
import Courses from './components/Courses';
import {Route, Switch, Router} from "react-router-dom";



function App() {
  return (
    <div>

        <UserHooks/>
        <Switch>
          <Route path='/class' exact component={CounterClass}/>
          <Route path='/hook' exact component={CounterHook}/>
          <Route path='/courses' exact component={Courses}/>
        </Switch>
      
      {/* <CounterClass/>
      <CounterHook/> */}
    </div>
  );
}

export default App;
