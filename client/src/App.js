import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import { Provider } from "react-redux";

//Style
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Components
import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing"
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePost from "./components/posts/CreatePost";
import Gallery from "./components/unsplash-gallery/Gallery"

//Containers
import BlogContainer from "./containers/BlogContainer";
// import ViewPostContainer from "./containers/ViewPostContainer";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <PrivateRoute exact path="/" component={BlogContainer} />
              {/* <Landing></Landing> */}
              <Route path="/Login" component={Login}></Route>
              <Route path="/Register" component={Register}></Route>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/blog/post/create" component={CreatePost} />
              <PrivateRoute exact path="/blog" component={BlogContainer} />
              <PrivateRoute exact path="/gallery" component={Gallery} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
