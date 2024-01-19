import React from 'react';
import VerticalSidebar from './components/VerticalSidebar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <VerticalSidebar />
      <Main/>
      
      <div className="main-content">
        <h1></h1>
        
      </div>
    </div>
    
  );
}

export default App;
