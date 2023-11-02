function Modal(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <p>Ya sure?</p>
      <button className="btn" onClick={confirmHandler}>
        Yaya!!
      </button>
      <button className="btn btn--alt" onClick={cancelHandler}>
        NoooooooOoooo
      </button>
    </div>
  );
}

export default Modal;
