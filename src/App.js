
import "./App.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <div class="flex flex-col justify-between items-center">
        <div class="w-screen mb-5">
          <Nav />
        </div>
        <div class="mt-1">
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
            <Route path="/lieux">
              <Cart />
            </Route>
          </Switch>

        </div>

      </div>

    </Router>
  )
}

export default App
