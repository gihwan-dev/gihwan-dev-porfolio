import { toast } from '~/components/ui/use-toast';

interface ScreenFileInputProps {
  documentId: number;
  type: 'mobile' | 'desktop' | 'tablet';
  refetch: () => void;
}

function* take<T>(iter: Iterable<T>, n: number) {
  const iterator = iter[Symbol.iterator]();
  while (n--) {
    const { value, done } = iterator.next();

    if (done) break;

    yield value;
  }
}

function* chunk<T>(iter: Iterable<T>, size: number) {
  const iterator = iter[Symbol.iterator]();

  while (true) {
    const arr = [
      ...take(
        {
          [Symbol.iterator]: () => iterator,
        },
        size,
      ),
    ];

    if (arr.length) yield arr;

    if (arr.length < size) break;
  }
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

      for (const file of e.target.files || []) {
        if (file instanceof File) {
          formData.append(file.name, file);
        }
      }

      const chunkedFiles = [...chunk(formData, 5)];

      for (const chunkedFileList of chunkedFiles) {
        const newFormData = new FormData();

        newFormData.append('type', type);
        newFormData.append('documentId', documentId.toString());

        chunkedFileList.forEach(([key, value]) => {
          newFormData.append(key, value);
        });

        const response = await fetch(`/api/image/${documentId}/screen`, {
          method: 'POST',
          body: newFormData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload images');
        }
      }
      refetch();
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
          'flex h-[150px] w-[150px] flex-shrink-0 items-center justify-center bg-muted transition-all hover:opacity-70'
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
