import BioImage from './BioImage';
import BioText from './BioText';
import BioButton from './BioButton';
import Section from '~/components/Section';
import Container from '~/components/Container';
import { findBio } from '~/server/query/bio';

const BioRoot = async () => {
  const bio = await findBio();

  if (!bio) {
    return <h1>Error... Please refresh page.</h1>;
  }

  return (
    <Section id="#about">
      <Container className="flex flex-col items-center justify-center gap-28 lg:flex-row">
        <BioImage bio_img={bio.bio_img} />
        <div className="flex flex-col items-center gap-12">
          <BioText title={bio.title} description={bio.description} />
          <BioButton resume_link={bio.resume_link} />
        </div>
      </Container>
    </Section>
  );
};

export default BioRoot;
