import React, { useState } from "react";

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
