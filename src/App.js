// import "./App.css";

import Router from "./Navigation/router";
import { setUsername} from "./storage"

setUsername("Not my name again");

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;

