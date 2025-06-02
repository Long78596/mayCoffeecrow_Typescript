import { useRoutes } from "react-router-dom";
import routes from "./routes/routest";
import "./index.css";

function App() {
  const element = useRoutes(routes);

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
