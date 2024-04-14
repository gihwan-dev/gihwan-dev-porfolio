import { useEditorStore } from '../../stores/useEditorStore';
import {
  createImageTag,
  createNewModel,
  getImageOrNull,
  sendImageAndGetLink,
} from '../services/editor.service';
import { useRouter, useSearchParams } from 'next/navigation';
import { api } from '~/trpc/react';
import { toast } from '~/components/ui/use-toast';
import { useCallback, useEffect } from 'react';

export const useEditorHook = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const documentId = searchParams.get('id');
  const type = searchParams.get('type');

  const { model, change } = useEditorStore(state => state);

  const { mutate } = api.document.saveContent.useMutation();
  const { data: document } = api.document.getOneDocument.useQuery({
    documentId: documentId === null ? null : +documentId,
  });

  const onEditClose = useCallback(() => {
    router.back();
  }, [router]);

  const onModelChange = useCallback(
    (e: string | undefined = '') => {
      change(e);
    },
    [change],
  );

  const onSave = useCallback(() => {
    if (type || documentId) {
      toast({
        title: 'Save...',
      });
      mutate(
        { model, type, documentId: documentId === null ? null : +documentId },
        {
          onSuccess: document => {
            if (!document) {
              toast({
                title: 'Failed to save... try again...!',
              });
              return;
            }
            const { document_id } = document;
            toast({
              title: 'Save successfully',
            });
            const newUrl = `/admin/documents/edit/save/${document_id}`;
            router.push(newUrl);
          },
        },
      );
    }
  }, [mutate, router, type, model, documentId]);

  const onPasteCapture: React.ClipboardEventHandler<HTMLDivElement> =
    useCallback(
      async e => {
        try {
          e.preventDefault();
          const clipboardData = e.clipboardData;
          const items = clipboardData.items;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          const image = getImageOrNull(items);

          if (image !== null) {
            toast({
              title: 'Uploading image...',
            });
            const resultString = await sendImageAndGetLink(image);
            const imageTag = createImageTag(resultString);
            const newModel = createNewModel(model, imageTag);
            change(newModel);
            toast({
              title: 'Upload image successfully!',
            });
            return;
          }
          const text = clipboardData.getData('text/plain');
          if (text) {
            const newModel = createNewModel(model, text);
            change(newModel);
          }
          return;
        } catch (e) {
          const newErrorModel = createNewModel(model, '에러가 발생했습니다.');
          change(newErrorModel);
          console.error(e);
        }
      },
      [change, model],
    );

  useEffect(() => {
    if (documentId && model === '') {
      change(document?.content ?? '');
    }
  }, [change, document?.content, documentId, model]);

  return {
    model,
    onSave,
    onPasteCapture,
    onEditClose,
    onModelChange,
  };
};
