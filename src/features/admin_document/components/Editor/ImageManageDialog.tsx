import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import { useImageManageDialog } from '../../business/hooks/imageManageDialog.hooks';
import { Button } from '~/components/ui/button';

const ImageManageDialog = () => {
  const { open, setOpen } = useImageManageDialog();
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Image manger</DialogTitle>
          <DialogDescription>Manage pasted image.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} variant={'destructive'}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImageManageDialog;
