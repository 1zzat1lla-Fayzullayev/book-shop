import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin(): JSX.Element {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: 0,
  });

  const navigate = useNavigate();

  // input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Failed to store user in local storage", error);
      return;
    }
    if (!user.username || !user.email || !user.password) {
      console.error("User does not exist");
      return;
    }
    navigate("/signup");
  };
  return (
    <div>
      <div className="wrapper d-flex align-items-center bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5">
              <h2 className="text-center text-light mb-4">SIGN IN</h2>
              <div className="form-box">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    required
                    placeholder="Username"
                    value={user.username || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={user.email || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    value={user.password || ""}
                    onChange={handleChange}
                  />
                  <button type="submit">Submit</button>
                  <div className="text-center mt-5">
                    <p className="text-muted">
                      Already have an account?
                      <Link
                        to="/signup"
                        className="text-decoration-underline text-light px-1"
                      >
                        Sign up
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
