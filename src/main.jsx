import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import App from "./App";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Team from "./pages/Team";

import Programs from './pages/Programs'
import Careers from './pages/Careers'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/team',
        element: <Team />
      },
      {
        path: '/program',
        element: <Programs/>
      },
      {
        path: '/careers',
        element: <Careers/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);