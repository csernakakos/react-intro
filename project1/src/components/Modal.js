import React from 'react';
// import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({handleClose, children, isSalesModal}) {
//   return ReactDOM.createPortal((

    let backgroundColor = "palevioletred";
    let OEM = process.env.REACT_APP_OEM;
    OEM = "andr";

    switch(OEM) {
        case "mil":
            backgroundColor = "#008DCC";
            break;
        case "mcd":
            backgroundColor = "#F2C200";
            break;
        case "andr":
            backgroundColor = "#3AD17D"
            break;
        default:
            backgroundColor = "pink";
    }

 
    
    function getVersion() {
        let version = parseInt(process.env.REACT_APP_DOC_VERSION);

        if (version <= 2) {
            return "obsolete-LTSB";
        }
        else if (version === 3) {
            return "current";
        } else {
            return "neither";
        }
    }


    return (
    <div className="modal-backdrop">
        <div className="modal" style={{
                backgroundColor,
                // Override the above backgroundColor that was set by OEM with the result of isSalesModal:
            	// backgroundColor: isSalesModal ? "paleturquoise" : "palevioletred",
        }}>
            {children}

            <button className={[getVersion(), "class2", "class3"].join(" ")} onClick={handleClose}>OK</button>
        </div>
    </div>
//   ), document.body
  );
}
