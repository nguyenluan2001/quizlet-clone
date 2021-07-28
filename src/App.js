import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute";
import Introduce from './scenes/introduce/Introduce';
import Main from "./scenes/main/Main";
import AuthProvider from './services/authContext'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/vi"  component={Introduce}></Route>
            <PrivateRoute path="/"  component={Main}></PrivateRoute>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
