import './App.css';
import React from 'react';
import Dashboard from './component/LiveChatApp/Dashboard';
import Store from './component/LiveChatApp/Store';
// import RecipeList from './component/RecipeList/RecipeList';

function App() {
  

  return (
    <div className="App">
        {/* <RecipeList />  */}
        <Store>
          <Dashboard />
        </Store>
    </div>
  );
}

export default App;
