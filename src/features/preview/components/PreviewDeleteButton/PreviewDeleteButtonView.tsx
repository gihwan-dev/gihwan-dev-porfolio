import React from 'react';

import { Button } from '~/components/ui/button';

interface PreviewDeleteButtonProps {
  onClick: () => void;
}

export default function PreviewDeleteButtonView({
  onClick,
}: PreviewDeleteButtonProps) {
  return (
    <Button onClick={onClick} variant={'destructive'}>
      Delete
    </Button>
  );
}
