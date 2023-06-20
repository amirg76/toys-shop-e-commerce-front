import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/apiCalls";
import {
  LogSignContainer,
  LogForm,
  LogSignTitle,
  LogInputContainer,
  LogInput,
  LogSignAgreement,
  LogButton,
  ErrorMassege,
  LogLink,
} from "../components/styles/User/User.styled";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <LogSignContainer>
      <LogForm>
        <LogSignTitle>SIGN IN</LogSignTitle>
        <LogInputContainer>
          <LogInput
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <LogInput
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </LogInputContainer>

        <LogButton onClick={handleLogin} disabled={isFetching}>
          Login
        </LogButton>
        {error && <ErrorMassege>Something went worng...</ErrorMassege>}
        <LogLink>DO NOT YOU REMEMBER THE PASSWORD?</LogLink>
        <LogLink>CREATE A NEW ACCOUNT</LogLink>
      </LogForm>
      {currentUser && <LogLink to="/" />}
    </LogSignContainer>
  );
};

export default Login;
