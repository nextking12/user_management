import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import CreateUser from './components/UserCreate';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">User Management</Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">User List</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Create User</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={
            <div className="row justify-content-center align-items-center" style={{minHeight: 'calc(100vh - 120px)'}}>
              <div className="col-md-6">
                <CreateUser />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
