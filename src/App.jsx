import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import ErrorPage from "./routes/ErrorPage";
import Welcome from "./routes/Welcome";
import TodoApp from "./routes/TodoApp";
import TodoList from "./components/todo/TodoList";

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
              element={
                <TodoList
                  listId="today"
                  listTitle="Мой день"
                  listEdit={false}
                />
              }
            />
            <Route
              path="/app/important"
              element={
                <TodoList
                  listId="important"
                  listTitle="Важное"
                  listEdit={false}
                />
              }
            />
            {lists.map((list) => (
              <Route
                key={list.id}
                path={`/app/${list.id}`}
                element={
                  <TodoList
                    listId={list.id}
                    listTitle={list.title}
                    listEdit={true}
                  />
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
