import React from 'react';

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { text } = props;
  return (
    <button className="text-red-500" type="button">
      {text}
    </button>
  );
};

export default Button;
