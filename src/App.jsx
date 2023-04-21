import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as routes from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route errorElement={<routes.ErrorPage />}>
          <Route path="/" element={<routes.Welcome />} />
          <Route path="/app" element={<routes.TodoApp />}>
            <Route path="/app/" element={<routes.Day />} />
            <Route path="/app/important" element={<routes.Important />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
