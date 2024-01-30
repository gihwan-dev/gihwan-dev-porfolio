import React from 'react';

const SmallTag: React.FC<{
  name: string;
  backgroundColor: string;
  textColor: string;
}> = ({ name, backgroundColor, textColor }) => {
  return (
    <mark
      className="rounded-sm px-3 py-1 text-xs"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {name}
    </mark>
  );
};

export default SmallTag;
