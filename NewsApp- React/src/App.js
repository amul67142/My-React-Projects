
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
  pageSize=6;
  render() {
    return (
      
      <div>
        <Router>
            <Navbar/>
              <Routes>
                    <Route exact path="/"  element={<NewsComponent  key="general" pageSize={this.pageSize} category="general"/>}>  </Route>
                    <Route exact path="/business" element={<NewsComponent key="business"  pageSize={this.pageSize} category="business"/>}>   </Route>
                    <Route exact path="/entertainment" element={<NewsComponent  key="entertainment" pageSize={this.pageSize} category="entertainment"/> }>  </Route>
                    <Route exact path="/general" element={ <NewsComponent  key="general" pageSize={this.pageSize} category="general"/>}>   </Route>
                    <Route exact path="/health" element={<NewsComponent  key="health" pageSize={this.pageSize} category="health"/>}>    </Route>
                    <Route exact path="/science" element={ <NewsComponent key="science"  pageSize={this.pageSize} category="science"/> }>  </Route>
                    <Route exact path="/sports" element={<NewsComponent  key="sports" pageSize={this.pageSize} category="sports"/> }>   </Route>
                    <Route exact path="/technology" element={<NewsComponent key="technology"  pageSize={this.pageSize} category="technology"/>  }>    </Route>
              
               </Routes>
           
        </Router>
      </div>
      
    )
  }
}





