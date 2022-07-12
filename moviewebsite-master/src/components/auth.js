import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const {error,loading}=useUserContext();
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
    
    
  };
  return (
  <div className="App">
    <div className="container">
      {!error && loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      
      
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
    </div>
  );
};

export default Auth;