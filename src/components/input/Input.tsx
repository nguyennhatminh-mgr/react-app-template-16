import React from 'react';

interface IInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  value: string | number;
}

const Input: React.FC<IInputProps> = (props) => {
  const { placeholder, onChange, value } = props;

  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
