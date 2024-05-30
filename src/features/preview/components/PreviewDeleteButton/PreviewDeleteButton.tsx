import React from 'react';

import { Button } from '~/components/ui/button';

interface PreviewDeleteButtonProps {
  onClick: () => void;
}

export default function PreviewDeleteButton({
  onClick,
}: PreviewDeleteButtonProps) {
  return (
    <Button onClick={onClick} variant={'destructive'}>
      Delete
    </Button>
  );
}
