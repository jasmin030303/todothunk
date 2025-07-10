import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/home/Home";
import Todo from "./components/pages/todo/Todo";
import Services from "./components/pages/services/Services";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

function App() {
  const routers = [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    {
      id: 2,
      path: "/todo",
      element: <Todo />,
    },
    {
      id: 3,
      path: "/services",
      element: <Services />,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {routers.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
