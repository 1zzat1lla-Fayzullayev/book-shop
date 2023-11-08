import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ISign } from "../interfaces/signin";

function Signin(): JSX.Element {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [data, setData] = useState<ISign>({
    username: "",
    email: "",
    password: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.value]: e.target.value });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Failed to store user in local storage", error);
      return;
    }
    if (!user) {
      console.error("User does not exist");
      return;
    }
    navigate("/signin");
  };
  return (
    <div>
      <div className="wrapper d-flex align-items-center bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5">
              <h2 className="text-center text-light mb-4">SIGN UP</h2>
              <div className="form-box">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    required
                    placeholder="Username"
                    value={data.username || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={data.email || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    value={data.password || ""}
                    onChange={handleChange}
                  />
                  <button type="submit">Submit</button>
                  <div className="text-center mt-5">
                    <p className="text-muted">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-decoration-underline text-light px-1"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
