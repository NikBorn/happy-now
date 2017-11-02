import React, { Component } from 'react';
import { auth, provider } from '../../fire';
import { connect } from 'react-redux';
import { setActiveuser } from '../../actions/index.js';


class SignIn extends Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.setActiveuser(null);
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });  
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result.user)
        this.props.setActiveuser(result.user);
      });
  }

  render() {
    const userName = this.props.activeUser ? this.props.activeUser.displayName : '';
    return (
      <div className="login-logout" >
        {this.props.activeUser ?
          <button className="login-logout-button" onClick={this.logout}>Log Out, {userName}</button>
          :
          <button className="login-logout-button" onClick={this.login}>Log In</button>
        }
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setActiveuser: (locations) => {
      dispatch(setActiveuser(locations));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    activeUser: state.activeUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
