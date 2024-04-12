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

export const useEditorHook = () => {
  const { model, change } = useEditorStore(state => state);
  const { mutate } = api.document.saveContent.useMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const onEditClose = () => {
    router.back();
  };

  const onModelChange = (e: string | undefined = '') => {
    change(e);
  };

  const onSave = () => {
    if (type) {
      toast({
        title: 'Save...',
      });
      mutate(
        { model, type },
        {
          onSuccess: ({ document_id }) => {
            toast({
              title: 'Save successfully',
            });
            const newUrl = `/admin/documents/edit/save/${document_id}?type=${type}`;
            router.push(newUrl);
          },
        },
      );
    }
  };

  const onPasteCapture: React.ClipboardEventHandler<
    HTMLDivElement
  > = async e => {
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
  };

  return {
    model,
    onSave,
    onPasteCapture,
    onEditClose,
    onModelChange,
  };
};
