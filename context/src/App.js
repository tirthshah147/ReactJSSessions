import { createContext } from 'react';
import Comp1 from './components/Comp1';

export const FirstName = createContext();
export const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Tirth"}>
        <LastName.Provider value={"Shah"}>
          <Comp1/> 
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;

