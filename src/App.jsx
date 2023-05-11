import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import ErrorPage from "./routes/ErrorPage";
import Welcome from "./routes/Welcome";
import TodoApp from "./routes/TodoApp";
import TodoList from "./components/todo/TodoList";
import SearchList from "./components/search/SearchList";

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
            <Route
              path="/app/tasks"
              element={
                <TodoList listId="tasks" listTitle="Задачи" listEdit={false} />
              }
            />
            <Route path="/app/search" element={<SearchList />} />

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
