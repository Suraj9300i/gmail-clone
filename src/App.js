import "./App.css";
import EmailList from "./EmailList";
import EmailSetting from "./EmailSetting";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Compose from "./Compose";
import { useSelector } from "react-redux";

function App() {
  const compose = useSelector((state) => state.compose);

  return (
    <div className="App">
      <Header></Header>
      <div className="app__body">
        <div className="app__body-left">
          <Sidebar></Sidebar>
        </div>
        <div className="app__body-middle">
          <EmailSetting></EmailSetting>
          <EmailList></EmailList>
          {compose ? <Compose></Compose> : ""}
        </div>
        <div className="app__body-right"></div>
      </div>
    </div>
  );
}

export default App;
