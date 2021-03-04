
import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import uid from "./uid";
import axios from "axios";


class App extends Component {
  state = {user:null
  };
  componentDidMount(){
    //inside component did mount !
    //         bio: "I am Billionaire"
    // email: "imtony@gmail.com"
    // isPublic: true
    // name: "Tony"
    // password: "123456789"
    // profilePic: "/images/users/1613135822255.jpeg"
    // username: "ironman"
    // __v: 0
    // _id: "60267fcea6fc854b381626e5"
    axios.get(`/api/user/${uid}`).then((obj) => {
      let user = obj.data.user;
      this.setState({
        user: user,
      });
    });
  }
  render() {
    let user = this.state.user;
    return (
      <Router>
        {user ? <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home user={user} />
            </Route>
            <Route path="/profile" exact>
              <Profile user={user} />
            </Route>
            <Route path="/settings" exact>
              <Settings user={user} />
            </Route>
            <Route path="*" exact>
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </div> : <h1>Loading Data</h1> }

      </Router>
    );
  }
}

export default App;