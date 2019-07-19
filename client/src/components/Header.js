import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, loading } = this.props.auth;

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            {!loading &&
              (!user ? (
                <li>
                  <a href="/auth/google">Login With Google</a>
                </li>
              ) : (
                <li>
                  <a href="">Log Out</a>
                </li>
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
