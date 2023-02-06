import React, { useState } from 'react'
import MyModal from './ShowModal';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    
  return (
    <>
        <button className='modal-btn' onClick={() => setShowModal(true)}><i class="fa fa-user-circle"></i>login</button>
        { showModal && <MyModal closeModal={closeModal}/>}
    </>
  )
}

export default Modal