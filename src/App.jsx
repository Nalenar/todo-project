import { Routes, Route, BrowserRouter } from "react-router-dom";

import ErrorPage from "./routes/ErrorPage";
import Welcome from "./routes/Welcome";
import TodoApp from "./routes/TodoApp";
import TodoList from "./components/todo/TodoList";

import { useSelector } from "react-redux";

const App = () => {
  const lists = useSelector((state) => state.lists);

  return (
    <BrowserRouter>
      <Routes>
        <Route errorElement={<ErrorPage />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/app" element={<TodoApp />}>
            <Route
              path="/app/"
              element={<TodoList category="today" headerText="Мой день" />}
            />
            <Route
              path="/app/important"
              element={<TodoList category="important" headerText="Важное" />}
            />
            {lists.map((list) => (
              <Route
                path={`/app/${list.id}`}
                element={
                  <TodoList category={list.id} headerText={list.title} />
                }
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
