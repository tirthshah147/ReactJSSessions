import {useReducer, useState} from 'react';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO : "ADD_TODO",
  TOGGLE_TODO : "TOGGLE_TODO",
  DELETE_TODO : "DELETE_TODO"
}

function reducer(todos,action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, { id: Date.now(),isDone : false, name:action.payload.name}]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo, isDone: !todo.isDone}
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos;

      
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer,[])
  const [name,setName] = useState('');

  function handleSubmitForm(e){
    e.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO, payload : {name}})
    setName('');
  }

  console.log(todos);


  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" onChange={e => setName(e.target.value)}/>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </div>
  )
}
