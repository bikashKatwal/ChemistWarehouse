// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Layout from "./pages/layout";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/admin",
        element: <Admin />
      }
    ]
  },
]);


function App() {
  return (
    <ScopedCssBaseline>
      <RouterProvider router={router} />
    </ScopedCssBaseline>
  );
}

export default App;
