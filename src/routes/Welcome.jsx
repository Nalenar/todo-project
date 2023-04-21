import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="flex h-screen w-screen flex-row items-center justify-center">
      {/* leftImage */}
      <div className="hidden">
        <img src="assets/welcome-page/welcome-left.png" alt="happy man" />
      </div>

      {/* hero */}
      <div className="flex h-full flex-col items-center justify-center">
        <img src="assets/welcome-page/logo.png" alt="logo" className="w-24" />
        <div className="my-2 w-72 text-center font-roboto">
          <h1 className="mb-5 text-5xl">To Do</h1>
          <img
            className="max-w- lg:hidden"
            src="assets/welcome-page/welcome-center.png"
            alt="happy women and men"
          />
          <p className="my-3 text-center text-3xl">
            Это приложение поможет вам организовать повседневные задачи
          </p>
        </div>

        <div className="flex flex-col">
          <button className="mb-2 rounded-3xl border-2 border-blue-500 bg-blue-500 px-4 py-2 text-xl text-white shadow-md shadow-blue-600">
            <Link to={"/app"}>Начало работы</Link>
          </button>
          <button className="rounded-3xl border-2 border-gray-500 bg-gray-500 px-4 py-2 text-xl text-white shadow-md shadow-gray-600">
            <Link to={"/about"}>Подробнее</Link>
          </button>
        </div>
      </div>

      {/* rightImage */}
      <div className="hidden">
        <img src="assets/welcome-page/welcome-right.png" alt="happy women" />
      </div>
    </main>
  );
};

export default Welcome;
