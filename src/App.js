import React from 'react';
import './App.css';
import HeadrerComponent from './HeadrerComponent';
import IssueListComponent from './components/IssueListComponent';
import FooterComponent from './FooterComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutUsComponent from './components/AboutUsComponent';

function App() {
  return (
    <Router>
       <HeadrerComponent />
      <Routes> 
      <Route exact path='/explore' element={<IssueListComponent />} />
      <Route exact path='/aboutUs' element={<AboutUsComponent />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
