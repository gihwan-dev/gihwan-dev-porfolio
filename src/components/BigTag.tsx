import React from 'react';

interface BigTagProps {
  name: string;
  backgroundColor: string;
  textColor: string;
}

export default function BitTag({
  name,
  backgroundColor,
  textColor,
}: BigTagProps) {
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
}
