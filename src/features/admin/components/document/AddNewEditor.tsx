/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

// Import all Froala Editor plugins;
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
// import 'froala-editor/js/plugins/align.min.js';

// Import a language file.
import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
// import 'froala-editor/js/third_party/spell_checker.min.js';

// Include font-awesome css if required.
// install using "npm install font-awesome --save"
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/js/third_party/font_awesome.min.js';
import React, { useEffect, useState } from 'react';
import { type Root, createRoot } from 'react-dom/client';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';
// Require Editor CSS files.

let root: null | Root = null;

const AddNewEditor = () => {
  const [model, setModel] = useState<any>();
  // TODO: 이미지 업로드 및 삭제 로직 손 봐야함.
  // TODO: 저장할 때 model에서 imageCache 비교해서 model에 없는 image 링크들 삭제.
  const [imageCache, setImageCache] = useState<any[]>([]);

  const onModelChange = (value: any) => {
    // do something
    setModel(value);
    console.log(model);
  };

  const onImageUploaded = (url: any) => {
    setImageCache(prev => [...prev, url]);
  };

  useEffect(() => {
    const container = document.getElementById('editor');
    if (container) {
      if (!root) {
        root = createRoot(container);
      }
      root.render(
        <FroalaEditorComponent
          config={{
            placeholderText: "Let's start to write!",
            imageUploadParam: 'image-file',
            imageUploadURL: '/api/image',
            imageUploadParams: { id: 'id' },
            imageUploadMethod: 'POST',
            imageAllowedTypes: ['jpeg', 'jpg', 'png'],
            events: {
              'image.beforeUpload': function (images: any) {
                console.log('beforeUpload: ', images);
                // Return false if you want to stop the image upload.
              },
              'image.uploaded': function (response: any) {
                console.log('uploaded: ', response);
                // Image was uploaded to the server.
                onImageUploaded(response.link);
              },
              'image.inserted': function ($img: any, response: any) {
                console.log('inserted: ', $img);
                console.log('inserted: ', response);
                // Image was inserted in the editor.
              },
              'image.replaced': function ($img: any, response: any) {
                console.log('replaced: ', $img);
                console.log('replaced: ', response);
                // Image was replaced in the editor.
              },
              'image.removed': function ($img: any) {
                // Do something here.
                // this is the editor instance.
                console.log('removed: ', $img);
              },
            },
          }}
          onModelChange={onModelChange}
          tag="textarea"
        />,
      );
    }
  });

  return <div id="editor"></div>;
};

export default AddNewEditor;
