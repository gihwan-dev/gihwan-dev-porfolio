'ues client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import SmallTag from '~/components/SmallTag';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import {
  type AddNewTagType,
  addNewTagSchema,
} from '~/features/blogs/types/tag.types';
import { api } from '~/trpc/react';

const AddNewTagButton = () => {
  const { refetch } = api.tag.getAll.useQuery();
  const { mutate } = api.tag.createOne.useMutation();

  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const form = useForm<AddNewTagType>({
    resolver: zodResolver(addNewTagSchema),
    defaultValues: {
      name: '',
      backgroundColor: '',
      textColor: '',
      category: '',
    },
  });

  const onSubmit = (values: AddNewTagType) => {
    mutate(
      {
        backgroundColor: values.backgroundColor,
        category: values.category,
        name: values.name,
        textColor: values.textColor,
        type: type ?? 'projects',
      },
      {
        onSuccess: () => {
          void refetch();
        },
      },
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new tag.</DialogTitle>
          <DialogDescription>Let{"'"}s add new tag.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="enter tag name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="enter tag category"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="backgroundColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Background color</FormLabel>
                    <FormControl>
                      <Input type="color" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="textColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text color</FormLabel>
                    <FormControl>
                      <Input type="color" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Save
              </Button>
            </form>
          </Form>
          <Card className="flex h-full flex-col">
            <CardHeader>preview</CardHeader>
            <CardContent className="flex h-full flex-col items-center justify-center">
              <SmallTag
                name={form.watch().name}
                backgroundColor={form.watch().backgroundColor}
                textColor={form.watch().textColor}
              />
            </CardContent>
          </Card>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTagButton;
