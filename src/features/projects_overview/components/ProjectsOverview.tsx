import Section from '~/components/Section';
import ProjectsOverviewTitle from './ProjectsOverviewTitle';
import Container from '~/components/Container';
import { api } from '~/trpc/server';
import ProjectsOverviewItem from './ProjectsOverviewItem';
import ProjectsOverviewImage from './ProjectsOverviewImage';
import ProjectOverviewDescription from './ProjectOverviewDescription';

const ProjectsOverview = async () => {
  const documents = await api.document.getAllDocument.query();
  return (
    <div className={'w-full'}>
      <Section id={'projects_overview'} className={'flex flex-col gap-8'}>
        <ProjectsOverviewTitle />
        <Container className={'rounded-lg bg-main-foreground p-12'}>
          <ul className={'grid grid-cols-1 gap-4 xl:grid-cols-2'}>
            {documents.map(document => (
              <ProjectsOverviewItem
                documentId={document.document_id}
                key={'Project Overview Item' + document.document_id}
              >
                <ProjectsOverviewImage src={document.thumbnail} />
                <ProjectOverviewDescription
                  title={document.title}
                  description={document.description}
                />
              </ProjectsOverviewItem>
            ))}
          </ul>
        </Container>
      </Section>
    </div>
  );
};

export default ProjectsOverview;
