import React, { Component } from 'react'
import Login from './Login'
import Blog from './Blog'
import Register from './Register'

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            login: false,
        }
    }

    handleRegister(){
        this.setState({
            login : true
        })
    }

    handleLogin(name , pass){
        {(name === "admin" && pass === "admin"?
        this.setState({
            login : true
        }):
        alert("Wrong Login Info!")
        )}

    }
  render() {
    return (
        <>      
            {
                this.state.login?<Blog/>:
                <Login login={this.state.login}
                handleLoginClick={this.handleLogin.bind(this)}/>
            } 
            
        </>
    )
  }
}
