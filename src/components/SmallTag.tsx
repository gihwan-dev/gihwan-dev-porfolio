import React from 'react';

const SmallTag: React.FC<{
  name: string;
  backgroundColor: string;
  textColor: string;
}> = ({ name, backgroundColor, textColor }) => {
  return (
    <mark
      className="rounded-sm px-1.5 py-0.5 text-xs sm:px-3 sm:py-1"
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
