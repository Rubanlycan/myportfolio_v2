import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationRouter from "./NavigationRouter";

function App() {
  return (
    <Router>
      <NavigationRouter />
    </Router>
  );
}

export default App;
