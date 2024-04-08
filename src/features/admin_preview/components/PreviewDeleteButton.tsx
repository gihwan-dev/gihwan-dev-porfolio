import React from 'react';

import { Button } from '~/components/ui/button';

type Props = {
  documentId: string;
};

const PreviewDeleteButton: React.FC<Props> = ({ documentId }) => {
  console.log(documentId);
  return <Button variant={'destructive'}>Delete</Button>;
};

export default PreviewDeleteButton;
