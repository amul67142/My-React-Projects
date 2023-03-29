
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,

  Route,
  Routes,
  
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
            <Navbar/>
              <Routes>
                    <Route exact path="/"  element={<NewsComponent  key="general" pageSize={6} category="general"/>}>  </Route>
                    <Route exact path="/business" element={<NewsComponent key="business"  pageSize={6} category="business"/>}>   </Route>
                    <Route exact path="/entertainment" element={<NewsComponent  key="entertainment" pageSize={6} category="entertainment"/> }>  </Route>
                    <Route exact path="/general" element={ <NewsComponent  key="general" pageSize={6} category="general"/>}>   </Route>
                    <Route exact path="/health" element={<NewsComponent  key="health" pageSize={6} category="health"/>}>    </Route>
                    <Route exact path="/science" element={ <NewsComponent key="science"  pageSize={6} category="science"/> }>  </Route>
                    <Route exact path="/sports" element={<NewsComponent  key="sports" pageSize={6} category="sports"/> }>   </Route>
                    <Route exact path="/technology" element={<NewsComponent key="technology"  pageSize={6} category="technology"/>  }>    </Route>
              
               </Routes>
           
        </Router>
      </div>
      
    )
  }
}





