import { toast } from '~/components/ui/use-toast';

interface ScreenFileInputProps {
  documentId: number;
  type: 'mobile' | 'desktop' | 'tablet';
  refetch: () => void;
}

export default function ScreenFileInput({
  documentId,
  type,
  refetch,
}: ScreenFileInputProps) {
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      toast({
        title: 'Try uploading images...',
      });
      const formData = new FormData();

      formData.append('type', type);
      formData.append('documentId', documentId.toString());

      for (const file of e.target.files || []) {
        if (file instanceof File) {
          formData.append(file.name, file);
        }
      }

      const response = await fetch(`/api/image/${documentId}/screen`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: 'Screen photos uploaded successfully',
        });
        refetch();
      }
    } catch (e) {
      toast({
        title: 'Screen photos upload failed',
      });
    }
  };

  return (
    <label htmlFor={'add-new-screen'} className={'cursor-pointer'}>
      <div
        className={
          'flex h-[150] w-[150] items-center justify-center bg-muted transition-all hover:opacity-70'
        }
      >
        <p className={'font-bold text-muted-foreground'}>+</p>
      </div>
      <input
        onChange={onChange}
        multiple
        type={'file'}
        id={'add-new-screen'}
        className={'hidden'}
      />
    </label>
  );
}
