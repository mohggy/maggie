import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GlobalStyle from './components/globalstyle/GlobalStyle';
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar.js"
import ResponsiveNav from './components/navbar/ResponsiveNav';
import AboutMe from './pages/AboutMe';


const App = () => {
  const[open, setOpen] = useState(false)

  const toggle = () =>  {
      setOpen(!open)
  }
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
      <Navbar toggle={toggle}/>
        <ResponsiveNav open={open} toggle={toggle}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/aboutme" component={AboutMe} exact/>
        </Switch>

      </Router>
      
    </React.Fragment>
  )
}

export default App
