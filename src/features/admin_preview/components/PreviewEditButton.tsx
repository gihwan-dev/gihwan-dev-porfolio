import { Button } from '~/components/ui/button';
import React from 'react';

type Props = {
  documentId: string;
};

const PreviewEditButton: React.FC<Props> = ({ documentId }) => {
  console.log(documentId);
  return <Button>Edit</Button>;
};

export default PreviewEditButton;
