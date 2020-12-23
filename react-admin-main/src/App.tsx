import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
    <div className="App">
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
  <ul className="navbar-nav px-3">
    <li className="nav-item text-nowrap">
      <a className="nav-link" href="#">Sign out</a>
    </li>
  </ul>
</nav>

<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file"></span>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users"></span>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers"></span>
              Integrations
            </a>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Last quarter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Social engagement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>

      <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

      <h2>Section title</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>sit</td>
            {/* </tr>
            </tbody>
            </table>
            </div>
            </main>
            </div>
            </div> */}
            </div>
    );
}
expoprt default App;


// import React from 'react';
// import './App.css';
// import Dashboard from "./secure/dashboard/Dashboard";
// import Users from "./secure/users/Users";
// import {BrowserRouter, Route} from "react-router-dom";
// import Login from "./public/Login";
// import Register from "./public/Register";
// import RedirectToDashboard from "./secure/RedirectToDashboard";
// import UserCreate from "./secure/users/UserCreate";
// import UserEdit from "./secure/users/UserEdit";
// import Roles from "./secure/roles/Roles";
// import RoleCreate from "./secure/roles/RoleCreate";
// import RoleEdit from "./secure/roles/RoleEdit";
// import Products from "./secure/products/Products";
// import ProductCreate from "./secure/products/ProductCreate";
// import ProductEdit from "./secure/products/ProductEdit";
// import Orders from "./secure/orders/Orders";
// import OrderItems from "./secure/orders/OrderItems";
// import Profile from "./secure/profile/Profile";

// function App() {
//     return (
//         <div className="Name="App">
//             <BrowserRouter>
//                 <Route path={'/'} exact component={RedirectToDashboard}/>
//                 <Route path={'/dashboard'} exact component={Dashboard}/>
//                 <Route path={'/profile'} component={Profile} exact/>
//                 <Route path={'/login'} component={Login}/>
//                 <Route path={'/register'} component={Register}/>
//                 <Route path={'/users'} component={Users} exact/>
//                 <Route path={'/users/create'} component={UserCreate}/>
//                 <Route path={'/users/:id/edit'} component={UserEdit}/>
//                 <Route path={'/roles'} component={Roles} exact/>
//                 <Route path={'/roles/create'} component={RoleCreate}/>
//                 <Route path={'/roles/:id/edit'} component={RoleEdit}/>
//                 <Route path={'/products'} component={Products} exact/>
//                 <Route path={'/products/create'} component={ProductCreate}/>
//                 <Route path={'/products/:id/edit'} component={ProductEdit}/>
//                 <Route path={'/orders'} component={Orders} exact/>
//                 <Route path={'/orders/:id'} component={OrderItems} exact/>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;
