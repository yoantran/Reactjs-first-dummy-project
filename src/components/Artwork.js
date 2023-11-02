import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Artwork(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function cancelModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={cancelModalHandler} onConfirm={cancelModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={cancelModalHandler} />}
    </div>
  );
}

export default Artwork;
