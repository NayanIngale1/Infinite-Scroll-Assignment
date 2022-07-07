import React from "react";
import "./Modal.css";
import { MdClose } from "react-icons/md";


export default function Modal({ children, open, onClose }) {
 
  if (!open) {
    return;
  }
  return (
    <>
      <div className="modal__ovarlay" onClick={onClose} ></div>
      <div className="modal__wrapper">
        <button onClick={()=>onClose()} className="modal__close__btn">
          <MdClose />
        </button>
        {children}
      </div>
    </>
  );
}
