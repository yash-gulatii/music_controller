import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import Room from "./Room";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Wrapper = (props) => {
      const params = useParams();
      return <Room {...{ ...props, match: { params } }} />;
    };
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<p>This is the home page</p>} />
          <Route path="/join" Component={RoomJoinPage} />
          <Route path="/create" Component={CreateRoomPage} />
          <Route path="/room/:roomCode" element={<Wrapper />} />
        </Routes>
      </Router>
    );
  }
}
