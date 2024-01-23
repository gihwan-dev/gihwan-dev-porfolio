import { api } from '~/trpc/server';
import BioImage from './BioImage';
import BioText from './BioText';
import BioButton from './BioButton';

const BioContainer = async () => {
  const bio = await api.bio.getBio.query();

  if (!bio) {
    return <h1>Error... Please refresh page.</h1>;
  }

  return (
    <section id="#about" className="main-section">
      <div className="main-container flex flex-col lg:flex-row justify-center items-center gap-28">
        <BioImage bio_img={bio.bio_img} />
        <div className="flex flex-col gap-12 items-center">
          <BioText title={bio.title} description={bio.description} />
          <BioButton resume_link={bio.resume_link} />
        </div>
      </div>
    </section>
  );
};

export default BioContainer;
