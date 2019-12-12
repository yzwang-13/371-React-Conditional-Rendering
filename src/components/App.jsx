import React from "react";
import Login from "./Login";

const currentTime = new Date().getHours();
var isLoggedin = false;
const App = () => (
  <div className="container">
    {isLoggedin ? <h1>Hello</h1> : <Login />}
    {/* if isLoggedin===true we render the h1 */}
    {/* <h1>Hello</h1> */}
    {/* if isLoggedin===false we render the form Login*/}
    {/* <Login /> */}
    {currentTime > 12 && currentTime + 5 < 17 && currentTime + 10 < 100 ? (
      <h1>Why are you still working </h1>
    ) : null}
    {/* equivilant to */}
    {currentTime > 12 && currentTime + 5 < 17 && currentTime + 10 < 100 && (
      <h1>Why are you still working </h1>
    )}
  </div>
);

export default App;
