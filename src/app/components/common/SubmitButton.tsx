import React from 'react';

interface SubmitButtonProps {
  label: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full py-2 text-white bg-indigo-600 rounded hover:bg-indigo-500 transition duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
