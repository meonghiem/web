// import "./App.css";

import Router from "./Navigation/router";
import { setUsername, setType } from "./storage";

setUsername("Not my name again");
// setType("none");

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
