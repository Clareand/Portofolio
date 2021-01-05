import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../page/home' 
import Education from '../page/Education'
import Experience from '../page/Experience';
import Skills from '../page/Skills';
import Interest from '../page/Interest';
import Awards from '../page/Awards';
class Routers extends Component {
    render() {
        return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Education} />
            <Route path="/skill" component={Skills} />
            <Route path="/experience" component={Experience} />
            <Route path="/interest" component={Interest} />
            <Route path="/awards" component={Awards} />
          </Switch>
        );
    }
}
export default Routers;