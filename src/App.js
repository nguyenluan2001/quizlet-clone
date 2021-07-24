import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Introduce from './scenes/introduce/Introduce';
import Main from "./scenes/main/Main";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Main}></Route>
          <Route path="/vi" exact component={Introduce}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
