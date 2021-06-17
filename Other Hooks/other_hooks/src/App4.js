import {useReducer} from 'react';

const ACTIONS = {
  INCREMENT : "ACTION_INCREMENT",
  DECREMENT : "ACTION_DECREMENT"
}

function reducer(state,action){
  switch(action.type){
    case ACTIONS.INCREMENT : 
     return {count : state.count + 1}
    case ACTIONS.DECREMENT : 
     return {count : state.count - 1}
    default : 
     return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer,{count : 0})
  // const [count,setCount] = useState(0);

  function increment(){
    dispatch({type : ACTIONS.INCREMENT});
  }

  function decrement(){
    dispatch({type : ACTIONS.DECREMENT});
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
