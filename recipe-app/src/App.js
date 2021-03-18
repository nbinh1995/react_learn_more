import './App.css';
import React from 'react';
import Dashboard from './component/LiveChatApp/Dashboard';
import Store from './component/LiveChatApp/Store';
// import RecipeList from './component/RecipeList/RecipeList';

function App() {
  

  return (
    <Store>
    <div className="App">
        {/* <RecipeList />  */}
       
          <Dashboard />
    </div>
    </Store>
  );
}

export default App;
