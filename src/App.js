import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from './scenes/home/Homepage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
