import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./redux/pages/Home";
import Detail from "./pages/Detail";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/character/:id" component={Detail}/>
          <Route path="/locations" component={Location}/>
          <Route path="/episodes" component={Episodes}/>
        </Switch>
    </Router>
  );
}



export default App;
