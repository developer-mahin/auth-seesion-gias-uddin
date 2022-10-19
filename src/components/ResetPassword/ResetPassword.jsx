import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../Hooks/firebase.config";
import { useState } from "react";
import Swal from 'sweetalert2'


const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const auth = getAuth(app);

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        props.onHide();
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      console.log("click");
  };

  return (
    <div>
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Forget password
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 className="text-danger m-3">Reset your password</h5>
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="form-control p-2 mt-3"
            />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={}>Close</Button> */}
            <Button onClick={handleResetPassword}>Update</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ResetPassword;
