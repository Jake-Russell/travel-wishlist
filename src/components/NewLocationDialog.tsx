import React from "react";
import Modal from "./UI/Modal.jsx";
import NewLocationForm from "./NewLocationForm.tsx";

const NewLocationDialog = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <NewLocationForm />
    </Modal>
  );
};

export default NewLocationDialog;
