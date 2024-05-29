import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import ScreenMobileContent from './ScreenMobileContent';
import ScreenTabletContent from './ScreenTabletContent';
import ScreenDesktopContent from './ScreenDesktopContent';

interface Props {
  documentId: number;
}

export default function PreviewScreenPhoto({ documentId }: Props) {
  return (
    <div className="mx-auto my-8 box-border h-[45rem] w-full max-w-5xl rounded-md bg-main-foreground px-6 xl:px-12">
      <h2 className={'py-8 text-2xl font-bold text-white'}>Screens</h2>
      <Tabs defaultValue={'mobile'}>
        <TabsList className={'flex w-full flex-row justify-center'}>
          <TabsTrigger value={'mobile'}>Mobile</TabsTrigger>
          <TabsTrigger value={'tablet'}>Tablet</TabsTrigger>
          <TabsTrigger value={'desktop'}>Desktop</TabsTrigger>
        </TabsList>
        <ScreenMobileContent documentId={documentId} />
        <ScreenTabletContent documentId={documentId} />
        <ScreenDesktopContent documentId={documentId} />
      </Tabs>
    </div>
  );
}
