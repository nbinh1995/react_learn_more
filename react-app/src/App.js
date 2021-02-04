import { useState } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  let init = [
    {title: 'Item 1',isDone:false},
    {title: 'Item 2',isDone:false},
    {title: 'Item 3',isDone:false},
  ]; 
  const [toDoItem,setToDoItem]= useState(init);
  let onItemClicked = (item) => {
    return (event)=>{
      const isDone = item.isDone;
      const index = toDoItem.indexOf(item);
      setToDoItem([...toDoItem.slice(0,index),{...item,isDone: !isDone},...toDoItem.slice(index+1)]);
    };
  }
  return (
    <div className="App">
       {
         toDoItem.length && toDoItem.map((item, index)=>{
          return <TodoItem key={index} item={item} onClick={onItemClicked(item)}></TodoItem>
         })
       }
    </div>
  );
}

export default App;
