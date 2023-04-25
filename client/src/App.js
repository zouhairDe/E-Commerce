import React from 'react';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom";
import { productsData } from './api/Api';
import Product from './components/Product';
import Login from './pages/Login';

{/* =============== layout ============== */}

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer/>
    </div>
  );
};

{/* =============== Router ============== */}

const router = createBrowserRouter([
  {path: "/",
  element:<Layout />,
  children:[
    {
      path: "/",
      element:<Home />,
      loader: productsData,
    },
    {
      path:"/product/:id",
      element:<Product />,
    },
    {
      path: "/cart",
      element:<Cart />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]}
])

function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
