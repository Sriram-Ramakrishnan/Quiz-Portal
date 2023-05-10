import {Fragment,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const auth =  useAuth();
  const navigate = useNavigate();

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const body = JSON.stringify(user);
      const response = await fetch('http://localhost:5000/auth/login',{
          method: "POST",
          headers: {'Content-Type':'application/json'},
          body: body
        });

      const parseRes = await(response.json());
      console.log(parseRes)
      localStorage.setItem("token",parseRes.token);
      localStorage.setItem("user_email",user.email);
      auth.login(email,password);
      console.log("Logged In Successfully");
      navigate('/dashboard', {replace: true});

    } catch (err) {
      console.error(err.message);
    }
    
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign in to Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Sign In" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;