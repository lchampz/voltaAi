import { Routes, Route } from "react-router-dom";
import CardPage from "./Pages/Card";
import UserTable from "./Pages/UserTable";
import Register from "./Pages/Register";

const AppRoutes = () => {
  const routes = [
    { path: "/", name: "Default", element: <UserTable /> },
    { path: "/user", name: "Default", element: <CardPage /> },
    { path: "/register", name: "Default", element: <Register /> },
  ];

  return (
    <Routes>
      {routes.map(({ path, element, name }) => (
        <Route key={name} path={path} element={element} />
      ))}
      
    </Routes>
  );
};

export default AppRoutes;
