import React from "react";
import { Link } from "react-router-dom";
import "./Login";

const Login = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="main-container d-flex container justify-content-between align-items-center">
          <div className="register-image image-fluid w-100  ">
            <img
              className="w-100 img-fluid image-fluid"
              src="https://i.ibb.co/0hLvWvP/undraw-Login-re-4vu2.png"
              alt=""
            />
          </div>
          <div className="register-form  w-100">
            <div className="input-box">
              <input
                className="form-control p-3 m-2"
                type="email"
                placeholder="Email"
              />
              <input
                className="form-control p-3 m-2"
                type="password"
                placeholder="password"
              />
              <p className="link ">
                <small className="text-danger link">
                  Are you new?{" "}
                  <Link to="/register" className="text-decoration-none"> Please Register</Link>
                </small>

                <span
                  role="button"
                  className="ms-4 text-primary cursor-pointer"
                >
                  Forget Password?
                </span>
              </p>
              <input className="p-2" type="checkbox" />{" "}
              <span className="mb-3 ">Remember me </span>
              <br />
              <button className="btn btn-info p-3 w-50 mt-3 fw-bold text-white">
                Login
              </button>
            </div>
            <button className="btn mt-3 border d-flex align-items-center justify-content-evenly p-2 m-auto">
              <img
                className="w-25 image-fluid btn-image"
                src="https://img.icons8.com/color/344/google-logo.png"
                alt=""
              />
              <p className="fw-bold">Google SignIn</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
