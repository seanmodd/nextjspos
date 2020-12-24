import React, { Component } from 'react';
import Login from '../public/Login';
import Nav from './components/Nav';
import Dashboard from './Dashboard';
import Users from './Users';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu';

class Wrapper extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className='container-fluid'>
          <div className='row'>
            <Menu />
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
              {this.props.children}
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Wrapper;
