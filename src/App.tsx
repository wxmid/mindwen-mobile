import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import './App.css';
import './common/style/reset.css'
import routers from "./router/index";
import { router } from './types'

function App() {
  return (
      <BrowserRouter>
          <Switch>
              {
                  routers.map((router: router)=>{
                      return (
                          <Route
                              key={router.path}
                              exact
                              path={router.path}
                              component = { router.component }
                          ></Route>
                      )
                  })
              }
          </Switch>
      </BrowserRouter>
  );
}

export default App;
