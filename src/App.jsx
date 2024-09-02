import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//layout
import MainLayout from "./Layout/MainLayout";

//pages
import { Home, About, Products,Contact } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path: "products",
          element: <Products/>
        }
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
