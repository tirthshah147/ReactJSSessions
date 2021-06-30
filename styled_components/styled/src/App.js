
import './App.css';
import { createGlobalStyle } from 'styled-components'
import {Button, SecondButton} from './components/Buttons';
import Header from './components/Header';
// import StyleHeader from './components/StyledHeader';
import AlternativeHeader from './components/AlternativeHeader';
import {SuccessButton, DangerButton} from './components/PropsButtons';
// import {PropsButtons, BigButton} from './components/PropsButtons';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  box-sizing: border-box;
  text-transform: uppercase;
}
body{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`

//inline css
//app css
//css variables
//file css

function App() {
  return (
    <div>
      <GlobalStyle/>
      {/* <StyleHeader title="Hello i m passed using props"/> */}
      <AlternativeHeader title="Hello i alternative header"/>
      {/* <PropsButtons color='blue'>Button 1</PropsButtons>
      <PropsButtons color="red">Button 2</PropsButtons>
      <PropsButtons>Button 3</PropsButtons>
      <BigButton>Big Button 4</BigButton> */}
      <SuccessButton big>Success Button</SuccessButton>
      <SuccessButton>Success Button</SuccessButton>
      <DangerButton>Danger Button</DangerButton>
      {/* <Header/>

      <Button>
        Click Me
      </Button>

      <SecondButton>
        Click Me 2
      </SecondButton> */}
      {/* <h1>styled Components</h1>
      <h1 style={{color:"red", textTransform:"uppercase"}}>Inline css</h1>
      <h1 className="global">Global css</h1>
      <h1 className="first">First</h1>
      <h1 className="second">Second</h1> */}
    </div>
  );
}

export default App;
