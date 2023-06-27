import { createContext } from "react";

const AuthContext = createContext({
  isSignedIn: {},
  setIsSignedIn: () => {},
});

export default AuthContext;
