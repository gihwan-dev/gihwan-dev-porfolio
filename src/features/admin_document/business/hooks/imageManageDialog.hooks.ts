import { useState } from 'react';

export const useImageManageDialog = () => {
  const [open, setOpen] = useState(false);

  return {
    open,
    setOpen,
  };
};
