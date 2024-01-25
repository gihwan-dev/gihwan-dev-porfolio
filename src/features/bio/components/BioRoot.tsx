import { api } from '~/trpc/server';
import BioImage from './BioImage';
import BioText from './BioText';
import BioButton from './BioButton';
import Section from '~/components/Section';
import Container from '~/components/Container';

const BioRoot = async () => {
  const bio = await api.bio.getBio.query();

  if (!bio) {
    return <h1>Error... Please refresh page.</h1>;
  }

  return (
    <Section id="#about">
      <Container className="flex flex-col lg:flex-row justify-center items-center gap-28">
        <BioImage bio_img={bio.bio_img} />
        <div className="flex flex-col gap-12 items-center">
          <BioText title={bio.title} description={bio.description} />
          <BioButton resume_link={bio.resume_link} />
        </div>
      </Container>
    </Section>
  );
};

export default BioRoot;
