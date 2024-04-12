'use client';

import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { toast } from '~/components/ui/use-toast';
import { api } from '~/trpc/react';

const AddDocumentTypeField = () => {
  const [type, setType] = useState('');
  const { mutate } = api.documentType.addNewType.useMutation();
  const { refetch } = api.document.getAllType.useQuery();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setType(e.target.value);
  };

  const onClick = () => {
    mutate(
      { type },
      {
        onSuccess: () => {
          setType('');
          refetch()
            .then(_ => {
              toast({
                title: 'Add document type successfully!',
              });
            })
            .catch(_ => {
              toast({
                title: 'Failed to add document type!',
              });
            });
        },
      },
    );
  };

  return (
    <div className="flex flex-row items-center gap-8">
      <Input onChange={onChange} />
      <Button size={'lg'} variant={'default'} onClick={onClick}>
        Add tag
      </Button>
    </div>
  );
};

export default AddDocumentTypeField;
