/*
*   应用组件
* */

import React, {Component} from 'react';
import { Route,Switch,Redirect} from 'react-router-dom';


import Login from './pages/login';
import Admin from './pages/admin';


export default class App extends Component {
  render () {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Admin}/>
        {/*为了login组件设计的*/}
        <Redirect to="/login" />
      </Switch>
    )
  }

}
