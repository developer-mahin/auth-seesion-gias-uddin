import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../Hooks/firebase.config";
import "./Login";
import Swal from "sweetalert2";
import ResetPassword from "../ResetPassword/ResetPassword";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);

  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError("");
        // ...
        Swal.fire("Good job!", "You clicked the button!", "success");
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

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
            <p className="text-danger">{error}</p>
            <div className="input-box">
              <input
                onBlur={handleEmail}
                className="form-control p-3 m-2"
                type="email"
                placeholder="Email"
              />
              <input
                onBlur={handlePassword}
                className="form-control p-3 m-2"
                type="password"
                placeholder="password"
              />
              <p className="link ">
                <small className="text-danger link">
                  Are you new?{" "}
                  <Link to="/register" className="text-decoration-none">
                    {" "}
                    Please Register
                  </Link>
                </small>

                <span
                  onClick={() => setModalShow(true)}
                  role="button"
                  className="ms-4 text-primary cursor-pointer"
                >
                  {" "}
                  Forget Password?
                </span>
              </p>
              <input
                onClick={() => setIsDisable(!isDisable)}
                className="p-2"
                type="checkbox"
              />{" "}
              <span className="mb-3 ">Remember me </span>
              <br />
              <button
                onClick={handleLogin}
                className="btn btn-info p-3 w-50 mt-3 fw-bold text-white"
                disabled={isDisable}
              >
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
        <ResetPassword
          show={modalShow}
          onHide={() => setModalShow(false)}
        ></ResetPassword>
      </div>
    </div>
  );
};

export default Login;
