import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Main from "./components/Main";
import Manual from "./components/Manual";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false) 

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  return (
    <div className="App">
      <Header />
      {
        modalIsOpen && <Modal closeModal={closeModal} />
      }
      <Main openModal={openModal} />
      <Manual />
      <Questions openModal={openModal} />
      <Footer />
    </div>
  );
}

export default App;
