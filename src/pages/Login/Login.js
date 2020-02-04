import React, { useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { AuthContext } from "../../context/AuthContext";

const Login = props => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  });
  console.log(props);
  const { email, password } = formLogin;

  const { userHasAuthenticated } = useContext(AuthContext);

  const validateFrom = () => {
    return email.lenght > 0 && password.lenght > 0;
  };

  const onChange = e => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      console.log(e.message);
      return;
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit" disabled={!validateFrom}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
