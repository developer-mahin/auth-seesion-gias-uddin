import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../../Hooks/firebase.config";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useContext } from "react";
import { UserContext } from "../Layout/Main";
import handleSignInGoogle from "../../Hooks/googleSignUp";
import { useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const auth = getAuth(app);
  const { user, setUser } = useContext(UserContext);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    const validation = /\S+@\S+\.\S+/.test(e.target.value);
    if (!validation) {
      setError("Please enter valid email");
      return;
    }
    setEmail(e.target.value);
    setError("");
  };

  const handlePassword = (e) => {
    if (!/.{8}/.test(e.target.value)) {
      setError("Password must be 8 character");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(e.target.value)) {
      setError("Password should be have one special character");
      return;
    }
    if (!/(?=.*[A-Z])/.test(e.target.value)) {
      setError("Password must be one capital latter");
      return;
    }
    setPassword(e.target.value);
    setError("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if ((name, email, password)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const userInfo = userCredential.user;
          setUser(userInfo);
          updateName();
          verifyEmail();
          setError("");
          Swal.fire("Good job!", "You clicked the button!", "success");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          // ..
        });
    } else {
      setError("Please fil out all the field");
      return;
    }
  };

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
    toast.info("Check your email and verify", { autoClose: 5000 });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [auth, setUser]);

  return (
    <div>
      <div className="mt-5">
        <div className="main-container d-flex container justify-content-between align-items-center">
          <div className="register-image image-fluid w-100  ">
            <img
              className="w-100 img-fluid image-fluid"
              src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
              alt=""
            />
          </div>
          <div className="register-form  w-100">
            <p className="text-danger">{error}</p>
            <div className="input-box">
              <form action="">
                <input
                  onBlur={handleName}
                  className="form-control p-3 m-2"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <input
                  onBlur={handleEmail}
                  className="form-control p-3 m-2"
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  onBlur={handlePassword}
                  className="form-control p-3 m-2"
                  type="password"
                  placeholder="password"
                  required
                />
                <p className="link ">
                  <small className="text-danger link">
                    Already have an account?{" "}
                    <Link to="/login" className="text-decoration-none">
                      {" "}
                      Please Login
                    </Link>
                  </small>
                </p>
                <input
                  onClick={() => setIsDisable(!isDisable)}
                  className="p-2"
                  type="checkbox"
                />{" "}
                <span className="mb-3">accept term & condition</span>
                <br />
                <button
                  onClick={handleRegister}
                  type="submit"
                  className="btn btn-info p-3 w-50 mt-3 fw-bold text-white"
                  disabled={isDisable}
                >
                  Register
                </button>
              </form>
            </div>
            <button
              onClick={handleSignInGoogle}
              className="btn mt-3 border d-flex align-items-center justify-content-evenly p-2 m-auto"
            >
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

export default Register;
