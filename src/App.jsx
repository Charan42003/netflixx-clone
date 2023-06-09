import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Signin from './components/signin'
import BeforeLog from './components/BeforeLog'
import HomeScreen from './components/HomeScreen'
import RoutLayout from './components/RoutLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <RoutLayout />}>
      <Route path='/' element={ <BeforeLog />}></Route>
      <Route path="/signin" element={ <Signin />}></Route>
      <Route path="/home" element={ <HomeScreen />}></Route>
    </Route>
  ));
  return (
    <>
      <RouterProvider router= { router } />
      {/* <BeforeLog /> */}
      {/* <HomeScreen /> */}
      {/* <Signin /> */}
    </>
  )
}

export default App
