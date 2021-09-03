import React from 'react'
import { Route, Switch ,Redirect} from "react-router-dom";

import Home from "../components/HomePage";
import Login from "../components/Login";
import Register from "../components/RegisterPage";

const Routes = () => (
  <main>
     <Switch>
        <Route path="/home/:id(\d+)" component={Home} exact />
        <Route path="/login/:id(\d+)" component={Login}>
          { sessionStorage.getItem('state') ? <Redirect to="/homepage/:id(\d+)" /> : undefined }
          </Route>
        <Route path="/register" component={Register}>
        { !sessionStorage.getItem('state') ? <Redirect to="/register" /> : undefined }
        </Route>
      </Switch>
  </main>
)

export default Routes;