import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


import{
  BrowserRouter as Router,
 Routes,
 Route,

} from 'react-router-dom';

const App=()=> {
 let name='manav';
          
    return (
      <div>
        <Router>

        <NavBar/>
        {/* <LoadingBar><LoadingBar/> */}
        <Routes>
          <Route exact path="/" element={<News key="1" pagesize={20} country='in' category="general" /> }/>
          <Route exact path="/entertainment" element={<News key="2" pagesize={20} country='in' category="entertainment" /> }/>
          <Route exact path="/general" element={<News key="3"  pagesize={20} country='in' category="general" /> }/>
          <Route exact path="/health" element={<News key="4" pagesize={20} country='in' category="health" /> }/>
          <Route exact path="/science" element={<News key="5" pagesize={20} country='in' category="science" /> }/>
          <Route exact path="/sports" element={<News key="6" pagesize={20} country='in' category="sports" /> }/>
         <Route exact path="/technology" element={<News key="7" pagesize={20} country='in' category="technology" /> }/>
        </Routes>
        </Router>
        </div>
    )
  
} 

export default App;
 


