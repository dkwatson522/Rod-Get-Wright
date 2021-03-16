import React, { useContext } from 'react';

const Button = ({  text, onClick }) => {

  return (
    <div className="my-1 mx-1 flex-shrink-0 bg-blue-600 text-white text-xs py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 text-center">
      <button onClick={onClick} className="">
        {text}
      </button>
    </div>
  );
}


export default Button;
