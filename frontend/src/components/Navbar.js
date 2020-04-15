import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    logOut(e){          //method
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }
    render(){
        const loginRegLink = (
            <ul classNameName="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div classNameName="collapse navbar-collapse" id="navbar1">
                    <ul classNameName="navbar-nav">
                        <li classNameName="navbar-item">
                            <Link to="/" classNameName="navbar-link">Home</Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);