import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
const App = () => {
    return (
        <div>
          <BrowserRouter>
              <Navbar/>
            </BrowserRouter>   
        </div>
    )
};
export default App;