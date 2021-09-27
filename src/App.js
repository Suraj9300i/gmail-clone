import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app__body">
        <div className="app__body-left">
          <Sidebar></Sidebar>
        </div>
        <div className="app__body-middle"></div>
        <div className="app__body-right"></div>
      </div>
    </div>
  );
}

export default App;
