import Link from 'next/link';
import { type Documents } from '@prisma/client';
import ProjectsOverviewImage from '~/features/projects_overview/components/ProjectsOverviewImage';

interface Props {
  document: Documents;
}

const ProjectsOverviewItem: React.FC<Props> = ({ document }) => {
  return (
    <li>
      <Link href={''}>
        <ProjectsOverviewImage src={document.thumbnail} />
      </Link>
    </li>
  );
};

export default ProjectsOverviewItem;
