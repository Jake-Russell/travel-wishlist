import React from "react";
import Modal from "./UI/Modal";

const TravelCardDialog = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <p>Test</p>
    </Modal>
  );
};

export default TravelCardDialog;
