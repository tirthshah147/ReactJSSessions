import {useContext} from 'react';
import {FirstName, LastName} from '../App';

// const fetchingData = async()= >{
//   const response = await fetch(url);
//   const finalResp = await response.json();
//   console.log(finalResp);

//   const response2 = await fetch(url2);
//   const finalResp2 = await response2.json();
//   console.log(finalResp2);
// }

function Comp3(){
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
      // <FirstName.Consumer>
      //   {
      //     (fname) => {
      //      return (
      //           <LastName.Consumer>
      //           {
      //             (lname) => {
      //               return <h1>My name is {fname} {lname}</h1>
      //             }
      //           }
      //         </LastName.Consumer>
      //      ) 
      //     }
      //   }
      // </FirstName.Consumer>
      <h1>My name is {fname} {lname}</h1>
  );
}

export default Comp3;
