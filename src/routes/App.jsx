import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;
