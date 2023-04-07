
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router,Route, Routes,} from "react-router-dom";


const App= ()=>{
  const pageSize = 6;
  
    return (

      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsComponent key="general" pageSize={pageSize} category="general" />}>  </Route>
            <Route exact path="/business" element={<NewsComponent key="business" pageSize={pageSize} category="business" />}>   </Route>
            <Route exact path="/entertainment" element={<NewsComponent key="entertainment" pageSize={pageSize} category="entertainment"/>}></Route>
            <Route exact path="/general" element={<NewsComponent key="general" pageSize={pageSize} category="general" />}>   </Route>
            <Route exact path="/health" element={<NewsComponent key="health" pageSize={pageSize} category="health" />}>    </Route>
            <Route exact path="/science" element={<NewsComponent key="science" pageSize={pageSize} category="science" />}>  </Route>
            <Route exact path="/sports" element={<NewsComponent key="sports" pageSize={pageSize} category="sports" />}>   </Route>
            <Route exact path="/technology" element={<NewsComponent key="technology" pageSize={pageSize} category="technology" />}>    </Route>

          </Routes>

        </Router>
      </div>

    )
  
}

export default App




