import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../Layout/Main";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../Hooks/firebase.config";
import Swal from "sweetalert2";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const auth = getAuth(app);

  const handleLogOut = () => {
    
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Swal.fire("Good job!", "You clicked the button!", "success");
      })
      .catch((error) => {
        // An error happened.
      });
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
  }, []);

  return (
    <div>
      <nav className="d-flex justify-content-around align-items-center bg-secondary p-3 flex-wrap">
        <div className="logo ">
          <img
            className="logo-img"
            src="https://i.ibb.co/TtRpKPP/doctor.png"
            alt=""
          />
        </div>
        <div className="menu-container d-flex flex-wrap ">
          <Link to="/home" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Home</li>
          </Link>
          {user?.uid ? (
            <li
              onClick={handleLogOut}
              role="button"
              className="nav-link items  ms-3 text-info fw-bolder"
            >
              Logout
            </li>
          ) : (
            <Link to="/login" className="text-decoration-none">
              <li className="nav-link items  ms-3 text-info fw-bolder">
                Login
              </li>
            </Link>
          )}
          <Link to="/register" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">
              Register
            </li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">About</li>
          </Link>
          <Link to="/profile" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">
              Profile
            </li>
          </Link>
          <li className="nav-link items  ms-3 text-info fw-bolder">
            {user?.uid && <span>{user?.displayName}</span>}
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Header;
