import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
// import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return(
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login />}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
