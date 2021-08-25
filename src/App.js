import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GlobalStyle from './components/globalstyle/GlobalStyle';
import Navbar from './components/navbar/Navbar';
// import Home from "./pages/landing.js"

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path="/nav" component={Navbar} exact />
        </Switch>

      </Router>
      
    </React.Fragment>
  )
}

export default App
