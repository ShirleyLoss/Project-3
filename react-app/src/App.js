import React, { Component } from "react";
import Home from "./Componets/Layout/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InventoryList from "./Componets/Habits/InventoryList";
import InventoryEdit from "./Componets/Habits/InventoryEdit";
import Register from "./Componets/Register";
import Login from './Componets/Register/Login'
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route path="/" exact={true} component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/habits" exact={true} component={InventoryList} />
          <Route path="/habits/:id" component={InventoryEdit} />
        </Switch>
      </Router>
    );
  }
}
export default App;
