import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LogSignContainer,
  SignForm,
  LogSignTitle,
  SignInputContainer,
  SignInput,
  LogSignAgreement,
  SignButton,
  ErrorMassege,
  LogLink,
} from "../components/styles/User/User.styled";
import { register } from "../store/apiCalls";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state) => state.user);
  const handleRegister = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, mobile, password, name, lastName });
  };
  return (
    <LogSignContainer>
      <SignForm>
        <LogSignTitle>Create Account</LogSignTitle>
        <SignInputContainer>
          <SignInput
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <SignInput
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <SignInput
            placeholder="mobile"
            onChange={(e) => setMobile(Number(e.target.value))}
          />
          <SignInput
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <SignInput
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <SignInput
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <SignInput placeholder="confirm password" /> */}
        </SignInputContainer>
        {error && <ErrorMassege>Something went worng...</ErrorMassege>}
        <LogSignAgreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </LogSignAgreement>
        <SignButton onClick={handleRegister} disabled={isFetching}>
          Create
        </SignButton>
      </SignForm>
      {currentUser && <LogLink to="/" />}
    </LogSignContainer>
  );
};

export default Register;
