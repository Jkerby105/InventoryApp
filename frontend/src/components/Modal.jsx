import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Form } from "react-bootstrap";

import classes from "../styles/modal/Modal.module.css";

const Modal = forwardRef(({ onReset, removeItem }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className={classes["result-modal"]}>
      <div>
        <p>
          Are you sure you want to <strong> DELETE </strong>this category.
        </p>

        <form method="dialog" onSubmit={onReset}>
          <button onClick={removeItem}>Yes</button>
          <button>No</button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
