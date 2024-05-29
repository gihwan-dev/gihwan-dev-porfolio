import BioImage from './BioImage';
import BioButton from './BioButton';
import Section from '~/components/Section';
import Container from '~/components/Container';
import BioContent from './BioContent';
import BioInfo from './BioInfo';
import BioTitle from './BioTitle';
import BioDescription from './BioDescription';
import { Suspense } from 'react';
import { Skeleton } from '~/components/ui/skeleton';
import BioContentSkeleton from '~/features/bio/components/BioContentSkeleton';

const Bio = async () => {
  return (
    <Section id="#about">
      <Container className="flex flex-col items-center justify-center gap-28 lg:flex-row">
        <Suspense fallback={<Skeleton className={'h-[475] w-[374]'} />}>
          <BioImage />
        </Suspense>
        <Suspense fallback={<BioContentSkeleton />}>
          <BioContent>
            <BioInfo>
              <BioTitle />
              <BioDescription />
            </BioInfo>
            <BioButton />
          </BioContent>
        </Suspense>
      </Container>
    </Section>
  );
};

export default Bio;
