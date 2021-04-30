import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import tachyons from 'tachyons';
import App from './containers/App';

// const Layout = (props) => {

//   console.log(props.children);
//   return (
//     <div>
//       <header>My Header</header>
//       <main>{props.children[0]}</main>
//       <h1>I am a third child!</h1>
      
//     </div>
//   )
// }

// const App = () => {
//   return(
//     <div>
//       <Layout> 
//         <h1>I am First Child</h1>
//         <h1>I am Second Child</h1>
//       </Layout>
//     </div>
    
//   )
// }


ReactDOM.render(
  <React.StrictMode>
    < App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
