import React, { useState } from "react";
import Modal from '/src/shared/ui/Modal.jsx'

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>로그인</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
export default App
