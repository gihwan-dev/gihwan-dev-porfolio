import BioImage from './BioImage';
import BioButton from './BioButton';
import Section from '~/components/Section';
import Container from '~/components/Container';
import { findBio } from '~/server/query/bio';
import BioContent from './BioContent';
import BioInfo from './BioInfo';
import BioTitle from './BioTitle';
import BioDescription from './BioDescription';

const Bio = async () => {
  const bio = await findBio();

  if (!bio) {
    return <h1>Error... Please refresh page.</h1>;
  }

  return (
    <Section id="#about">
      <Container className="flex flex-col items-center justify-center gap-28 lg:flex-row">
        <BioImage bio_img={bio.bio_img} />
        <BioContent>
          <BioInfo>
            <BioTitle>{bio.title}</BioTitle>
            <BioDescription>{bio.description}</BioDescription>
          </BioInfo>
          <BioButton resume_link={bio.resume_link} />
        </BioContent>
      </Container>
    </Section>
  );
};

export default Bio;
