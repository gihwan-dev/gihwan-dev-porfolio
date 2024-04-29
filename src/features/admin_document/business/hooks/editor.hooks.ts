import { useEditorStore } from '../../stores/useEditorStore';
import {
  createImageTag,
  createNewModel,
  getImageOrNull,
  sendImageAndGetLink,
} from '../services/editor.service';
import { useParams, useRouter } from 'next/navigation';
import { api } from '~/trpc/react';
import { toast } from '~/components/ui/use-toast';
import { useCallback, useEffect } from 'react';
import _ from 'lodash';

export const useEditorHook = () => {
  const router = useRouter();

  const params = useParams();
  const documentId = params.id as string;

  const { model, change, initializeState } = useEditorStore(state => state);

  const { mutate } = api.document.updateContent.useMutation();

  const {
    data: document,
    isLoading,
    isError,
  } = api.document.getOneDocument.useQuery({
    documentId: +documentId,
  });

  const onEditClose = useCallback(() => {
    router.back();
  }, [router]);

  const onSave = useCallback(() => {
    toast({
      title: 'Save...',
    });
    mutate(
      { documentId: +documentId, content: model },
      {
        onError: () => {
          toast({
            title: 'Error',
          });
        },
        onSuccess: document => {
          if (!document) {
            toast({
              title: 'Failed to save... try again...!',
            });
            return;
          }

          const { document_id } = document;

          const newUrl = `/admin/documents/edit/save/${document_id}`;
          void initializeState();
          router.push(newUrl);
          toast({
            title: 'Save successfully',
          });
        },
      },
    );
  }, [mutate, router, model, documentId, initializeState]);

  const saveOnModelChange = useCallback(
    (value: string) => {
      toast({
        title: 'Save...',
      });
      mutate(
        {
          documentId: +documentId,
          content: value,
        },
        {
          onError: () => {
            toast({
              title: 'Error...',
            });
          },
          onSuccess: document => {
            if (!document) {
              toast({
                title: 'Failed to save... try again...!',
              });
              return;
            }
            toast({
              title: 'Save successfully',
            });
          },
        },
      );
    },
    [documentId, mutate],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceModelMutate = useCallback(
    _.debounce(saveOnModelChange, 1000),
    [],
  );

  const onModelChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      change(e.target.value);
      debounceModelMutate(e.target.value);
    },
    [change, debounceModelMutate],
  );

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
    isLoading,
    isError,
  };
};
