import React from "react";

const ResetPassword = () => {
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
              type="email"
              placeholder="Email"
              className="form-control p-2 mt-3"
            />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={props.onHide}>Close</Button> */}
            <Button>Update</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ResetPassword;
