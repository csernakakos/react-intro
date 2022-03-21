import React from 'react';
// import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({handleClose, children}) {
//   return ReactDOM.createPortal((
    return (
    <div className="modal-backdrop">
        <div className="modal">
            {children}

            <button onClick={handleClose}>OK</button>
        </div>
    </div>
//   ), document.body
  );
}
