import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/teamDetails">TeamDetails</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/teamDetails">
              <TeamDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
