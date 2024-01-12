import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./Modal.scss";
import Button from "./Button.tsx";
import { emojiCodePoints } from "../../utils/emojis.ts";

const Modal = ({ children, open, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal`} onClose={onClose}>
      <div className="button-container close-modal">
        <Button icon={emojiCodePoints.notAvailable} onClick={onClose} />
      </div>

      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
