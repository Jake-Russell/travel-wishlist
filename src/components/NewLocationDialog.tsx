import React from "react";
import Modal from "./UI/Modal";

const NewLocationDialog = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <p>New Location Dialog</p>
    </Modal>
  );
};

export default NewLocationDialog;
