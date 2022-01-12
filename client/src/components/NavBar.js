
import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Navbar extends Component {

    render() {
      return (
        <nav className="navbar navbar-dark bg-dark navbar-expand container" variant="pills" defaultActiveKey="/">
          <Link to="/" className="navbar-brand active">HomePage</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link  to ="/employee/" className="nav-link active">View</Link>
            </li>
            <li className="navbar-item">
            <Link to="/employee/add" className="nav-link active">Add Employee</Link>
            </li>
            <li className="navbar-item">
            <Link to="/employee/view/:id" className="nav-link active">Search Employee</Link>
            </li>
          </ul>
          </div>
        </nav>
      );
    }
  }
