import React from 'react';

const BitTag: React.FC<{
  name: string;
  backgroundColor: string;
  textColor: string;
}> = ({ name, backgroundColor, textColor }) => {
  return (
    <mark
      className="rounded-sm px-4 py-2 text-xl"
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
