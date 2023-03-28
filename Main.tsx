import React from "react";
import App from "./App";
import AuthContextProvider from "./src/context/AuthContextProvider";

const Main = () => {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
};

export default Main;
