import React from "react";
import App from "./App";
import { RootSiblingParent } from "react-native-root-siblings";
import AuthContextProvider from "./src/context/AuthContextProvider";

const Main = () => {
  return (
    <RootSiblingParent>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </RootSiblingParent>
  );
};

export default Main;
