import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const TodoApp = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default TodoApp;
