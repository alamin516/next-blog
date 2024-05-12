import React from 'react';

const SubmitButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      type='submit'
      className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out ${props.className}`}
      disabled={props.submit}
    >
      {props.submit ? (
        <div className='flex items-center justify-center'>
          <div className='animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2'></div>
          Processing...
        </div>
      ) : (
        props.text
      )}
    </button>
  );
};

export default SubmitButton;
