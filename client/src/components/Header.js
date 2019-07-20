import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  render() {
    const { user, loading } = this.props.auth;

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={user ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
            {!loading &&
              (!user ? (
                <li>
                  <a href="/auth/google">Login With Google</a>
                </li>
              ) : (
                <Fragment>
                  <li>
                    <Payments />
                  </li>
                  <li>
                    <a href="/auth/logout">Log Out</a>
                  </li>
                </Fragment>
              ))}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
