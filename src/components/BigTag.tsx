import React from 'react';

const BitTag: React.FC<{
  name: string;
  backgroundColor: string;
  textColor: string;
}> = ({ name, backgroundColor, textColor }) => {
  return (
    <mark
      className="rounded-sm px-2 py-1 text-lg md:px-4 md:py-2 md:text-xl"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {name}
    </mark>
  );
};

export default BitTag;
