import { Preview } from 'src/features/preview';
import { type ParamsProps } from '~/types/params-type';
import { type Metadata } from 'next';
import { db } from '~/server/db';

type Props = {
  params: { id: string };
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const document = await db.documents.findUnique({
    where: { document_id: +id },
    select: {
      document_id: true,
      title: true,
      description: true,
      thumbnail: true,
    },
  });

  if (!document) {
    return {
      title: '존재하는 문서가 아닙니다. 죄송합니다.',
    };
  }

  return {
    title: document.title,
    description: document.description,
    openGraph: {
      title: document.title,
      description: document.description,
      images: [document.thumbnail],
    },
    twitter: {
      title: document.title,
      description: document.description,
      images: [document.thumbnail],
    },
  };
}

export default async function ProjectDetailPage({ params }: ParamsProps) {
  const { id } = params;

  const document = await db.documents.findUnique({
    where: { document_id: +id },
  });

  if (!document) {
    throw new Error('페이지를 찾을 수 없습니다.');
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://portfolio.gihwan-dev.com/projects/' + id,
    },
    headline: document.title,
    image: [document.thumbnail],
    datePublished: document.reg_date,
    dateModified: Date.now(),
    author: {
      '@type': 'Person',
      name: '최기환',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gihwan-dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https:///portfolio.gihwan-dev.com/favicon.icon',
      },
    },
    description: document.description,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preview documentId={+id} />
    </div>
  );
}
