import { ProjectsOverview } from '~/features/projects_overview';
import { type Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '프론트엔드 개발자 최기환의 프로젝트 목록 입니다.',
  description:
    '프론트엔드 개발자를 준비하며 진행했던 다양한 프로젝트들 입니다.',
  keywords: ['프론트엔드', '개발자', '포트폴리오', '프로젝트', '블로그'],
};

export default function ProjectPage() {
  return <ProjectsOverview />;
}
