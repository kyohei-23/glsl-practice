import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import { Nav } from "./pages";
import { Wavy } from "./pages/wavy";

export const routerSource:Array<RouteObject & {labelTxt:string}> = [
  {
    path: '/',
    element: <Nav/>,
    labelTxt: 'index' 
  },
  {
    path: '/plane',
    element: <App />,
    labelTxt: 'plane' 
  },
  {
    path: '/wavy',
    element: <Wavy />,
    labelTxt: 'wavy plane'
  }
]

export const router = createBrowserRouter(routerSource)