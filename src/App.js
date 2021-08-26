import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GlobalStyle from './components/globalstyle/GlobalStyle';
import Home from "./pages/Home"

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>

      </Router>
      
    </React.Fragment>
  )
}

export default App
