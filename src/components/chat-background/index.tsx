import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ChatBackground: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-grow-1 h-[100vh] bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC]">
      {children}
    </div>
  );
};

export default ChatBackground;
