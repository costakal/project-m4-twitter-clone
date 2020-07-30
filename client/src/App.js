import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles";
import Sidebar from "./components/Sidebar";
import Homefeed from "./components/HomeeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Sidebar />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Homefeed />
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route exact path="/:profileId">
              <Profile />
            </Route>
          </Switch>
        </Wrapper>
        <RightSideSpace />
      </Router>
    </>
  );
};

export default App;

const Wrapper = styled.div`
  margin-left: 276px;
  margin-right: 101px;
  border-right: 1px solid lightgray;
`;

const RightSideSpace = styled.div`
  position: fixed;
  right: 100px;
  height: 100vh;
  border-left: 1px solid lightgray;
`;
