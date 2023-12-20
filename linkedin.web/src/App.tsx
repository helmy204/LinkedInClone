import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login/Login';
import Header from './components/Header';
import Home from './home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: [<Header />, <Home />]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
