// styling
import "./App.scss";
import ReactGA from "react-ga";

// components
import Header from "./pages/home/header/Header";
import Router from "./routes";

function App() {

//   ReactGA.initialize(process.env.REACT_APP_GA);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
