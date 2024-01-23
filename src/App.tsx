import "./styles/global.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

function Layout() {
  return (
    <div className="main">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: `/`,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
