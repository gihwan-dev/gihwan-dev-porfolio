import Section from '~/components/Section';
import ProjectsOverviewTitle from './ProjectsOverviewTitle';
import Container from '~/components/Container';
import { api } from '~/trpc/server';
import ProjectsOverviewItem from './ProjectsOverviewItem';

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
                document={document}
                key={'Project Overview Item' + document.document_id}
              />
            ))}
          </ul>
        </Container>
      </Section>
    </div>
  );
};

export default ProjectsOverview;
