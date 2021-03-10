
import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import uid from "./uid";
import axios from "axios";
import Login from "./Components/Login/Login"


class App extends Component {
  state = {
    user: null,
    isAuth:false
  };
  login=()=>{
    // axios.get(`/api/user/${uid}`).then((obj) => {
    //   let user = obj.data.user;
    //   this.setState({
    //     user: user,
    //     isAuth : true
    //   });
    // });
    window.location = "http://localhost:4000/auth/google"

       
  }
  logout=()=>{
    this.setState({
      isAuth : false,
      user : null
    })

  }
  componentDidMount() {
   axios.get("/auth/checkAuth").then( obj =>{
     if(obj.data.isAuth){
       this.setState({
        isAuth : true,
        user : obj.data.user
       })
     }
   })
    
  }
  render() {
    let user = this.state.user;
    return (
      <Router>
        <div className="app">
          <Header isAuth={this.state.isAuth} logout = {this.logout} />
          <Switch>
            <Route path="/" exact>
              {this.state.isAuth ? <Home user={user} /> : <Login login={this.login}></Login> } 
            </Route>
            <Route path="/profile" exact>
              {this.state.isAuth ? <Profile user={user} /> : <Login login={this.login}></Login> }
            </Route>
            <Route path="/settings" exact>
              {this.state.isAuth ? <Settings user={user} updateUser={this.updateUser} /> : <Login login={this.login}></Login> }
            </Route>
            <Route path="*" exact>
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}
export default App;


// user view

  //   //inside component did mount !
  //   //bio: "I am Billionaire"
  //   // email: "imtony@gmail.com"
  //   // isPublic: true
  //   // name: "Tony"
  //   // password: "123456789"
  //   // profilePic: "/images/users/1613135822255.jpeg"
  //   // username: "ironman"
  //   // __v: 0
  //   // _id: "60267fcea6fc854b381626e5"