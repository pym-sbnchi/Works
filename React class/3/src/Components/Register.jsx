import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: null,
      passInput: null,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleRegisterClick();
    this.setState({
      nameInput: "",
      passInput: "",
    });
  }

  render() {
    return (
      <>
        <div className="backdrop"></div>
        <div className="wrapper ">
          <div className="form-box login">
            <h2>Register</h2>
            <form>
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) => this.setState({ ...this.state, nameInput: e.target.value })}
                />
              </div>
              <div className="input-box">
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e) => this.setState({ ...this.state, passInput: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-login"
                onClick={this.handleClick.bind(this)}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
