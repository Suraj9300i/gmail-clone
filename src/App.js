import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Compose from "./Compose";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReadMail from "./ReadMail";

function App() {
  const compose = useSelector((state) => state.compose);

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="app__body">
          <div className="app__body-left">
            <Sidebar></Sidebar>
          </div>
          <div className="app__body-middle">
            <Switch>
              <Route path="/mail">
                <ReadMail></ReadMail>
              </Route>
              <Route path="/">
                <EmailList></EmailList>
              </Route>
            </Switch>

            {compose ? <Compose></Compose> : ""}
          </div>
          <div className="app__body-right"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
