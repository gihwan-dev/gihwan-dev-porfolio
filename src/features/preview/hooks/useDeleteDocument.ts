import { api } from '~/trpc/react';
import { useRouter } from 'next/navigation';
import { toast } from '~/components/ui/use-toast';

export default function useDeleteDocument(documentId: number) {
  const { mutate } = api.document.deleteOneDocument.useMutation();
  const router = useRouter();

  const deleteDocument = () => {
    const toaster = toast({
      title: 'Deleting document...',
      duration: 5000,
    });
    mutate(
      {
        documentId,
      },
      {
        onSuccess: () => {
          toaster.dismiss();
          router.back();
        },
        onError: e => {
          toaster.update({
            id: toaster.id,
            title: 'Failed to delete document',
            description: e.message,
          });
        },
      },
    );
  };
  return {
    deleteDocument,
  };
}
