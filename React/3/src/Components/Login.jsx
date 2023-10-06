import React, { Component } from "react";
import Register from "./Register";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      passInput: "",
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleLoginClick(this.state.nameInput, this.state.passInput);
    this.setState({
      nameInput: "",
      passInput: "",
    });
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="form-box login">
            <h2>Login</h2>
            <form>
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="admin"
                  onChange={(e) => this.setState({ ...this.state, nameInput: e.target.value })}
                />
              </div>
              <div className="input-box">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="admin"
                  onChange={(e) => this.setState({ ...this.state, passInput: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-login"
                onClick={this.handleClick.bind(this)}
              >
                Login
              </button>
            </form>
            <div>
                <p>
                    Not Register? <span onClick={<Register/>}>Click Here</span>
                </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
