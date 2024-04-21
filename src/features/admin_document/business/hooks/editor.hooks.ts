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

  const { model, change, initializeState } = useEditorStore(state => state);

  const { mutate } = api.document.saveContent.useMutation();
  const { data: document } = api.document.getOneDocument.useQuery({
    documentId: documentId === null ? null : +documentId,
  });

  const onEditClose = useCallback(() => {
    router.back();
  }, [router]);

  const onModelChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      change(e.target.value);
    },
    [change],
  );

  const onSave = useCallback(() => {
    if (type || documentId) {
      toast({
        title: 'Save...',
      });
      void initializeState();
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
  }, [mutate, router, type, model, documentId, initializeState]);

  const onPasteCapture = useCallback(
    async (
      e: React.ClipboardEvent<HTMLTextAreaElement>,
      ref: React.MutableRefObject<HTMLTextAreaElement | null>,
    ) => {
      try {
        e.preventDefault();

        if (ref.current === null) return;

        const clipboardData = e.clipboardData;
        if (!clipboardData) return;
        const items = clipboardData.items;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const image = getImageOrNull(items);

        if (image !== null) {
          toast({
            title: 'Uploading image...',
          });
          const resultString = await sendImageAndGetLink(image);
          const imageTag = createImageTag(resultString);
          const newModel = createNewModel(
            model,
            imageTag,
            ref as React.MutableRefObject<HTMLTextAreaElement>,
          );
          change(newModel);
          toast({
            title: 'Upload image successfully!',
          });
          return;
        }
        const text = clipboardData.getData('text/plain');
        if (text) {
          const newModel = createNewModel(
            model,
            text,
            ref as React.MutableRefObject<HTMLTextAreaElement>,
          );
          change(newModel);
        }
        return;
      } catch (e) {
        toast({
          title: '에러가 발생했습니다. 다시 시도해 주세요.',
        });
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
