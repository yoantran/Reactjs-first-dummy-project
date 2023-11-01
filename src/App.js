import Artwork from "./components/Artwork";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Artwork Gallery</h1>
      <Artwork name="The Wedding" />
      <Artwork name="Cherry Blossom" />
      <Artwork name="Anna" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
