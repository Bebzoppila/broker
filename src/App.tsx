import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Main from "./components/Main";
import Manual from "./components/Manual";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import useModal from "./hooks/useModal";
function App() {
  const { modalState, closeModal, openModal } = useModal()

  return (
    <div className="App">
      <Header />
      {
        modalState && <Modal closeModal={closeModal} />
      }
      <Main openModal={openModal} />
      <Manual />
      <Questions openModal={openModal} />
      <Footer />
    </div>
  );
}

export default App;
