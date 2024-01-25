'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '~/components/ui/button';

const DocumentAddButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const buttonHandler = () => {
    const newSearchParam = new URLSearchParams(searchParams.toString());
    const newUrl = pathname + '/edit' + '?' + newSearchParam.toString();
    router.push(newUrl);
  };

  return <Button onClick={buttonHandler}>Add</Button>;
};

export default DocumentAddButton;
