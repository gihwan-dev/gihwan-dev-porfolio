import { Card, CardContent } from '~/components/ui/card';
import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DocumentDataTableContainer: FC<Props> = ({ children }) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DocumentDataTableContainer;
