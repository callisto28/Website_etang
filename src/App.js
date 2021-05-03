
import "./App.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import Service from "./components/Service";

function App() {
  return (
    <Router>
      <div className="app">

        <Nav />
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/service">
           <Service />
          </Route>
          <Route path="/apropos">
           <Apropos />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
