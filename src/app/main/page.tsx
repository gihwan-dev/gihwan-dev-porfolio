import { BioRoot } from '~/features/bio';
import { ProjectsRoot } from '~/features/projects';
import { SkillsRoot } from '~/features/skills';
import { SnsRoot } from '~/features/sns';
import { api } from '~/trpc/server';
import { type Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '프론트엔드 개발자 최기환의 포트폴리오 입니다.',
  description:
    '프론트엔드 개발자 최기환이라고 합니다. Next.js로 개발된 포트폴리오 사이트 입니다.',
  openGraph: {
    title: '프론트엔드 개발자 최기환의 포트폴리오 입니다.',
    description:
      '프론트엔드 개발자 최기환이라고 합니다. Next.js로 개발된 포트폴리오 사이트 입니다.',
  },
  twitter: {
    title: '프론트엔드 개발자 최기환의 포트폴리오 입니다.',
    description:
      '프론트엔드 개발자 최기환이라고 합니다. Next.js로 개발된 포트폴리오 사이트 입니다.',
  },
};

const MainPage = async () => {
  const documents = await api.document.getAllDocument.query();
  return (
    <main>
      <BioRoot />
      <ProjectsRoot documents={documents} />
      <SkillsRoot />
      <SnsRoot />
    </main>
  );
};

export default MainPage;
