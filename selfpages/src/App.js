import React, { Component, Fragment } from 'react'
import logo from './logo.svg';
import Menu from './molecule/menu/menu'
import Routing from './router/Routers'
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Routing/>
      </div>
    )
  }
}
