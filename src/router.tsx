import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import { Nav } from "./pages";
import { Wavy } from "./pages/wavy";
import { WavyDiagonal } from "./pages/wavyDiagonal";

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
  },
  {
    path: '/diagonal-wave',
    element: <WavyDiagonal />,
    labelTxt: 'diagonal wave'
  }
]

export const router = createBrowserRouter(routerSource)