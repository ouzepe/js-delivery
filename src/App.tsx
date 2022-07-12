import React from 'react';
import { Route, RouteProps, Routes} from "react-router-dom";
import Home from "./components/Home/Home"

export const clientRoute: RouteProps[] = [
  {path: "/", element: <Home /> },
];

function App() {
  
  return (
    <Routes>
      {clientRoute.map((route, i) => (
        <Route key={i} {...route}/>
      ))}
    </Routes>
  );
}

export default App;
