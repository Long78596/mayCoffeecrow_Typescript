// src/App.tsx
import { useRoutes } from "react-router-dom";
import routes from "./routes/routest";

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
