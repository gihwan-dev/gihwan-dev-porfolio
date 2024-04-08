/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import dynamic from 'next/dynamic';

const FroalaEditorComponent = dynamic(() => import('react-froala-wysiwyg'), {
  ssr: false,
});

import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { api } from '~/trpc/react';

if (typeof window !== 'undefined') {
  require('froala-editor/css/froala_style.min.css');
  require('froala-editor/css/froala_editor.pkgd.min.css');
  require('froala-editor/js/plugins.pkgd.min.js');
  require('froala-editor/js/languages/de.js');
  require('froala-editor/js/third_party/image_tui.min.js');
  require('froala-editor/js/third_party/embedly.min.js');
  require('font-awesome/css/font-awesome.css');
  require('froala-editor/js/third_party/font_awesome.min.js');
}

const AddNewEditor = () => {
  const [model, setModel] = useState<string>();

  const { mutate } = api.document.saveContent.useMutation();

  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const router = useRouter();

  const onEditClose = () => {
    router.back();
  };

  const onSave = () => {
    if (!model || model === '') {
      window.alert('Content is Empty...');
      return;
    }
    if (!type) {
      window.alert('Bad request... try refresh...');
      return;
    }
    mutate(
      {
        model,
        type,
      },
      {
        onSuccess: data => {
          console.log(data);
          const id = data.document_id;
          router.push(`/admin/documents/edit/save/${id}?type=${type}`);
        },
      },
    );
  };

  const onModelChange = (value: string) => {
    setModel(value);
  };

  return (
    <>
      <FroalaEditorComponent
        config={{
          placeholderText: "Let's start to write!",
          imageUploadParam: 'image-file',
          imageUploadURL: '/api/image',
          imageUploadParams: { id: 'id' },
          imageUploadMethod: 'POST',
          imageAllowedTypes: ['jpeg', 'jpg', 'png'],
        }}
        onModelChange={onModelChange}
        tag="textarea"
      />
      <div className="flex w-full flex-row justify-center gap-6">
        <Button onClick={onEditClose} variant={'destructive'}>
          Close
        </Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    </>
  );
};

export default AddNewEditor;
