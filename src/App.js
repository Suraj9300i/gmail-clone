import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app__body">
        <div className="app__body-left"></div>
        <div className="app__body-middle"></div>
        <div className="app__body-right"></div>
      </div>
    </div>
  );
}

export default App;
