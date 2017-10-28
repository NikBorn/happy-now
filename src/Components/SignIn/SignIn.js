import React, { Component } from 'react';
import fire, { auth, provider } from '../../fire';
import { connect } from 'react-redux';
import { setActiveuser } from '../../actions/index.js'


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    }
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line
  }

  handleChange(e) {
    /* ... */
  }

  logout() {
    this.props.setActiveuser(null)
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
        const user = result.user;
        console.log(user)
        this.props.setActiveuser(user)
        this.setState({
          user
        });
      });
  }

  render() {
    return(
      <div className="Login-Logout">
        {this.state.user ?
          <button onClick={this.logout}>Log Out</button>
          :
          <button onClick={this.login}>Log In</button>
        }
      </div>
    )
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
    locations: state.locations
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
