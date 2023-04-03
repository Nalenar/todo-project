import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center font-sans">
      <h1 className="mb-4 text-4xl font-bold text-gray-500">
        <em>Упс!</em>
      </h1>
      <p className="mb-4 text-xl">Извините, что-то пошло не так</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </div>
  );
};

export default ErrorPage;
