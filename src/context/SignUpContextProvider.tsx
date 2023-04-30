import * as React from "react";
import {LocationCallback, LocationObject} from 'expo-location'

const initialState = {
  signUpState: {
    email: "",
    password: "",
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    picture: "",
    location: null,
  },
  setSignUpState: () => {},
};

interface SignUpContext {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  phone: string;
  picture: string;
  location: LocationObject | null;
}

interface IContext {
  signUpState: SignUpContext;
  setSignUpState: React.Dispatch<React.SetStateAction<SignUpContext>>;
}

const signUpContext = React.createContext<IContext>(initialState);

const SignUpContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [signUpState, setSignUpState] = React.useState({
    email: "",
    password: "",
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    picture: "",
    location: null,
  });

  const signUpContextObj = React.useMemo(
    () => ({
      signUpState,
      setSignUpState,
    }),
    [signUpState]
  );

  return (
    <signUpContext.Provider value={signUpContextObj}>
      {children}
    </signUpContext.Provider>
  );
};

// hook for using context
export const useSignUpContext = () => React.useContext(signUpContext);

export default SignUpContextProvider;
