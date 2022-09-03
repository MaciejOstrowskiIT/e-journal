import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import App from "../App";
import SignIn from "../coponents/SignIn";
import SignUp from "../coponents/SignUp";
import Menu from "../coponents/Menu";

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="app" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoute;
