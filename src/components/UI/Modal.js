import "./Modal.css";
import { Fragment } from "react";
import reactDom from "react-dom";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="">
      <div className="modal">{props.children}</div>
    </div>
  );
};

const PortalElements = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElements
      )}
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        PortalElements
      )}
    </Fragment>
  );
};

export default Modal;
