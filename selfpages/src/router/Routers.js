import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router';
import About from '../page/testfile'
import Home from '../page/home' 
import More from '../page/about/About'  
class Routers extends Component {
    render() {
        return (
            
                <Switch>
                    <Route exact path="/" component={More}/>
                    <Route path="/about" component={About} />
                </Switch>
            
        )
    }
}
export default Routers;