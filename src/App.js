import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Home'
import Upload from './Upload'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upload' element={<Upload/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
