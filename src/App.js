import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound'
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          {/* private route */}
          <Route path="/dashboard">
            {/* dashboard */}
          </Route>
          <Route path="/purchase">
            <Purchase></Purchase>
          </Route>
          {/* private route */}

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
