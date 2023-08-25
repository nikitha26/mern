import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Users from "./user/pages/Users";
import Newplace from "./places/pages/Newplace";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
        <Route path="/places/new" exact>
          <Newplace/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>

  );
}

export default App;
