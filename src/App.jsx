import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Signin from './components/Signin/signin'
import BeforeLog from './components/HomePage-beforeLog/BeforeLog'
import HomeScreen from './components/HomeScreen/HomeScreen'
import RoutLayout from './components/RoutLayout/RoutLayout';

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
