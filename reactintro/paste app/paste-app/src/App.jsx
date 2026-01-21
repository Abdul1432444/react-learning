import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewPastes from "./components/ViewPastes";
import Pastes from "./components/Pastes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/pastes",
      element: (
        <div>
          <Navbar />
          <Pastes />
        </div>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <div>
          <Navbar />
          <ViewPastes />
        </div>
      ),
    },
  ]);
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
