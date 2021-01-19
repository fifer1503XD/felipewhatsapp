import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import ChatContainer from "./containers/ChatContainer";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Forgotpassword from "./components/Forgotpassword";
import PrivateRoute from "./components/PrivateRoute";
import Chatsp from "./components/Chatsp";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <LoginContainer />
        </Route>
        <Route path="/registro">
          <RegisterContainer />
        </Route>
        <Route path="/forgotpassword">
            <Forgotpassword/>
          </Route>
          <PrivateRoute path="/chat">
            <div className="ContainerPokedex">
            <Chatsp/>
            </div>
          </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
