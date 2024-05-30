import React from 'react';

interface SmallTagProps {
  name: string;
  backgroundColor: string;
  textColor: string;
}

export default function SmallTag({
  name,
  backgroundColor,
  textColor,
}: SmallTagProps) {
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
}
