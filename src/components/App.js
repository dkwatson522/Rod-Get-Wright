import React, { useState} from 'react';
import '../App.css';
import Schedule from './Schedule'
import Modal from './Modal';

export const WorkoutContext = React.createContext();

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(prev => !prev);
  }
  return (
      <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
        <Schedule handleModalToggle={handleModalToggle}/>
        {showModal && <Modal showModal={showModal} handleModalToggle={handleModalToggle}/>}
      </div>

  );
}







export default App;
