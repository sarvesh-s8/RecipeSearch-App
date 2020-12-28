import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import App from "../App";
import { IndiRecipe } from "./IndiRecipe";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/recipe/:id" component={IndiRecipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
