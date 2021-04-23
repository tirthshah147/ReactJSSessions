import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';

// const Add = (props) => <h1>{props.a + props.b}</h1>;
// const Add = ({a,b}) => <h1>{a + b}</h1>;

// const Subtract = ({a,b}) => <h1>{a - b}</h1>;


// function App(){
//   return (
//     <React.Fragment>
//       <Add a={2} b={2} />
//       <Subtract a={2} b={2} />
//     </React.Fragment>
//   );
// }



ReactDOM.render(
  
    <Hello greetings={"Hello React Js. This is Tirth"}/>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
