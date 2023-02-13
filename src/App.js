import React from "react";
import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <React.Fragment>
      <div style={{ width: "50%", backgroundColor: "lightblue" }}>
        <FullName />
        <ProfilePhoto />
        <Address />
      </div>
    </React.Fragment>
  );
}

export default App;
