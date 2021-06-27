import './App.css';
import React,{Component} from 'react';
import { quotes,backgrounds } from './data';


class App extends Component {
  
  timeTimer;
  tempTimer;

  quote = quotes[Math.floor(Math.random() * quotes.length)];
  background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  constructor(){
    super();
    this.state={
      name:'Tirth',
      query:'',
      todo:{},
      todoTitle:'',
      onboard:true,
      temp:'',
      time:'',
      city:''
    };

    //binding
  }

fetchTime = () => {
  let d = new Date();
  let time = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  console.log(time);
  this.setState({time});
}

fetchTemp = async() => {
  const ipJsonResp = await fetch('https://api.ipify.org/?format=json');
  const ipObj = await ipJsonResp.json();
  console.log(ipObj.ip);

  const cityJsonResp = await fetch(`https://api.ipinfodb.com/v3/ip-city/?key=63509115da54fe81d54201fa1391f09fb120c5083d171bcd831e560240b983e0&ip=${ipObj.ip}&format=json`);
  const cityObj = await cityJsonResp.json();
  this.setState({city : cityObj.cityName});
  console.log(cityObj.cityName);

  const tempJsonResp = await fetch(`http://api.weatherstack.com/current?access_key=4ecd7ec8d0cbe81711fa5d94af1e62a5&query=${cityObj.cityName}`);
  const tempObj = await tempJsonResp.json();
  let temp = tempObj.current.temperature;
  this.setState({temp});
  
}

componentDidMount = async() => {
  let name = localStorage.getItem("name");
  let todo = localStorage.getItem("todo");

  if ( name!== null) {
    await this.setState({onboard : true,name:name});
  }

  if (todo!==null) {
    await this.setState({todo : JSON.parse(todo)});
  }
  
  this.fetchTime();
  this.timeTimer = setInterval(this.fetchTime, 60000);
  
  this.fetchTemp();
  this.tempTimer = setInterval(this.fetchTemp, 3600000);

}

componentWillUnmount(){
  clearInterval(this.timeTimer);
  clearInterval(this.tempTimer);
}


  render() {
    return (
      <div className="mainBackground">
        <img src={this.background} alt="Background_image" className='png'/>
        {this.state.onboard ? (
          <div className='mainBox'>
            <div className='header'>
              <div>
                <form>
                  <i class="fas fa-search"></i>
                  <input type="text" className='google_search' name='query'/>
                </form>
              </div>
              <div className='temperature'>
                <span>{this.state.temp}<sup>o</sup></span>
                <div className="cityName">
                {this.state.city}
                </div>
              </div>
            </div>

            <div className='center'>
              <div className='center--time'>{this.state.time}</div>
              <div className='center--personal_line'>You Matter, {this.state.name}.</div>
              {this.state.todo.title == null ? (
                <>
                  <div className='center--asking_line'>What is your main focus for today?</div>
                  <form>
                    <input type="text" className='todoInput' name='todo'/>
                  </form>
                </>
              ) : (
                  <>
                    <div className='todo_headtext'>TODAY</div>
                    <div className='todo--mainBlock'>
                      <input type="checkbox" checked = {this.state.todo.isDone} className='checkbox'/>
                      
                      <div className='todo--title' style={this.state.todo.isDone ? {textDecoration : 'line-through'} : {}}>{this.state.todo.title}</div>
                      <i class="fas fa-times"></i>
                    </div>
                  </>
              )}
            </div>

            <div className='footer'></div>
          </div>
        ) : ('')}
      </div>
    )
  }
}

export default App;
