function Artwork(props) {
  function deleteHandler() {
    console.log("yayyy you clicked it!");
  }

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Artwork;
