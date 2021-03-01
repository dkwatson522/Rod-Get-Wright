import React from 'react';

const Button = ({  text, onClick }) => {



  return (
    <div className="flex flex-row justify-center items-center ">
    <button onClick={onClick} className="mx-1 flex-shrink-0 bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
      {text}
    </button>
      {/*
      <button onClick={onClick} className="mx-1 flex-shrink-0 bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
        <i className="far fa-trash-alt"></i>
      </button>
      <button className="mx-1 flex-shrink-0 bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
        <i className="fas fa-edit"></i>
      </button>
      <button className="mx-1 flex-shrink-0 bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
        <i className="fas fa-plus-square"></i>
      </button>
      */}
    </div>
  );
}


export default Button;
