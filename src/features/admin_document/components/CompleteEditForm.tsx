'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Card } from '~/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import {
  completeEditFormSchema,
  type CompleteEditFormType,
} from '../types/document.types';
import ThumbnailInput from './ThumbnailInput';
import TagListContainer from './TagListContainer';
import { Button } from '~/components/ui/button';
import { api } from '~/trpc/react';
import { toast } from '~/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

// TODO: 문서 type 변경할 수 있는 셀렉터 추가하기.
interface Props {
  title: string;
  description: string;
  documentId: number;
  thumbnail: string | null;
  startDate: Date;
  endDate: Date;
  documentTypeName: string;
  typeList: string[];
}

const CompleteEditForm: React.FC<Props> = ({
  title,
  description,
  documentId,
  thumbnail,
  startDate,
  endDate,
  documentTypeName,
  typeList,
}) => {
  const router = useRouter();

  const { mutate } = api.document.saveInfo.useMutation();

  // thumbnail, title, description, tag list 썸네일은 onChange 이벤트로
  const form = useForm<CompleteEditFormType>({
    resolver: zodResolver(completeEditFormSchema),
    defaultValues: {
      title: title,
      description: description,
      startDate: startDate.toISOString().substring(0, 10),
      endDate: endDate.toISOString().substring(0, 10),
      documentTypeName: documentTypeName,
    },
  });

  const onSubmit = (values: CompleteEditFormType) => {
    mutate(
      {
        title: values.title,
        description: values.description,
        documentId: documentId,
        startDate: values.startDate,
        endDate: values.endDate,
        documentTypeName: values.documentTypeName,
      },
      {
        onSuccess: document => {
          if (!document) {
            toast({
              title: 'Failed to complete document. Try again!',
            });
            return;
          }
          const { document_type } = document;
          const { document_type_name } = document_type;
          router.push(`/admin/documents/?page=1&type=${document_type_name}`);
        },
      },
    );
  };

  return (
    <Card className="box-border flex w-full max-w-3xl flex-col gap-4 px-12 py-8">
      <ThumbnailInput documentId={documentId} initThumbnail={thumbnail} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title..." {...field} />
                </FormControl>
                <FormDescription>
                  Enter your {"document's"} title.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="description..." {...field} />
                </FormControl>
                <FormDescription>
                  Enter your {"document's"} description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="documentTypeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document type</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger type={'button'}>
                      <SelectValue placeholder="Select document type." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {typeList.map(type => (
                      <SelectItem key={`type-select-menu-${type}`} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Enter your {"document's"} type.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start date</FormLabel>
                <FormControl>
                  <Input type={'date'} {...field} />
                </FormControl>
                <FormDescription>
                  Enter your {"document's"} start date.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End date</FormLabel>
                <FormControl>
                  <Input type={'date'} {...field} />
                </FormControl>
                <FormDescription>
                  Enter your {"document's"} end date.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant={'default'} className="w-full">
            Save
          </Button>
        </form>
      </Form>
      <TagListContainer />
    </Card>
  );
};

export default CompleteEditForm;
