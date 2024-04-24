'use client';

import React, { createContext, useContext, useState } from 'react';
import Link from 'next/link';
import useNavigateTo from '~/app/hooks/useNavigateTo';
import { CarouselItem } from '~/components/ui/carousel';
import SmallTag from '~/components/SmallTag';
import { isImageSrcTruthy } from '~/lib/truthy';
import Image from 'next/image';
import {
  type ChildrenProps,
  type ContextState,
  type ProviderProps,
} from '../types';

// ======================================= create context =======================================
const ProjectCarouselContext = createContext<ContextState | undefined>(
  undefined,
);
// ======================================= create context =======================================

// ======================================= type definition =======================================
interface State {
  ShowMore: typeof ProjectCarouselShowMore;
  Empty: typeof ProjectEmptyContent;
  Item: typeof ProjectCarouselItem;
  BottomHighlight: typeof ProjectCarouselBottomHighlight;
  Latest: typeof ProjectCarouselLatestTag;
  Title: typeof ProjectCarouselTitle;
  Description: typeof ProjectCarouselDescription;
  Info: typeof ProjectCarouselInfo;
  TechTagList: typeof ProjectCarouselTechTagList;
  ShowTechTagButton: typeof ProjectCarouselShowTechTagButton;
  Thumbnail: typeof ProjectCarouselThumbnail;
}
// ======================================= type definition =======================================

// ======================================= function definition =======================================
const ProjectsCarousel: React.FC<ProviderProps> & State = ({
  children,
  document,
}) => {
  const [openTechList, setOpenTechList] = useState(false);

  const toggleTechList = () => {
    setOpenTechList(prev => !prev);
  };

  return (
    <ProjectCarouselContext.Provider
      value={{ document, openTechList, toggleTechList }}
    >
      {children}
    </ProjectCarouselContext.Provider>
  );
};

function ProjectCarouselShowMore() {
  return (
    <div className={'flex w-full flex-row justify-end px-8 py-2 lg:px-4'}>
      <Link
        className={
          'font-bold text-white transition-all duration-300 hover:-translate-y-1'
        }
        href={'/projects'}
      >
        show more {'>'}
      </Link>
    </div>
  );
}

function ProjectEmptyContent() {
  return (
    <div className={'w-full py-12 text-center text-3xl font-bold text-white'}>
      Nothing to display content.
    </div>
  );
}

function ProjectCarouselItem({ children }: ChildrenProps) {
  const context = useContext(ProjectCarouselContext);
  const { navigate } = useNavigateTo();

  if (!context) {
    return null;
  }

  const { document } = context;

  const onClick: React.MouseEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLDivElement;
    if (target.tagName !== 'BUTTON') {
      navigate(`/projects/${document.document_id}`);
    }
  };

  return (
    <CarouselItem
      onClick={onClick}
      className={
        'group relative z-0 flex cursor-pointer flex-col items-center gap-4 pl-4 lg:basis-1/2 xl:basis-1/3'
      }
    >
      {children}
    </CarouselItem>
  );
}

function ProjectCarouselBottomHighlight() {
  return (
    <hr
      className={
        'mt-3 w-20 rounded-full border-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
      }
    />
  );
}

function ProjectCarouselLatestTag() {
  return (
    <div
      style={{
        letterSpacing: '3.6px',
      }}
      className={'absolute left-14 top-2 font-medium text-white'}
    >
      LATEST
    </div>
  );
}

function ProjectCarouselTitle({ children }: ChildrenProps) {
  return (
    <h3
      className={
        'whitespace-pre-wrap px-4 text-center text-lg font-bold text-white'
      }
    >
      {children}
    </h3>
  );
}

function ProjectCarouselDescription({ children }: ChildrenProps) {
  return (
    <p
      className={
        'text-md line-clamp-3 whitespace-pre-wrap text-center text-gray-300'
      }
    >
      {children}
    </p>
  );
}

function ProjectCarouselInfo({ children }: ChildrenProps) {
  return (
    <div
      className={
        'box-border flex w-full flex-col flex-wrap items-center gap-2 px-8'
      }
    >
      {children}
    </div>
  );
}

function ProjectCarouselTechTagList() {
  const context = useContext(ProjectCarouselContext);

  if (!context) {
    return null;
  }

  const { document, openTechList, toggleTechList } = context;
  return (
    openTechList && (
      <div
        className={
          'absolute bottom-10 left-1/2 z-20 flex w-11/12 -translate-x-1/2 flex-row flex-wrap items-center gap-2 rounded-md border border-gray-200 bg-white px-2 py-3 shadow'
        }
      >
        {document.project_tags.map(tag => (
          <SmallTag
            key={tag.document_type_id + tag.name + 'carousel tag list'}
            name={tag.name}
            backgroundColor={tag.background_color}
            textColor={tag.text_color}
          />
        ))}
        <button
          className={
            'absolute right-2 top-0 text-xl text-gray-400 transition-all hover:scale-105 hover:text-gray-900'
          }
          onClick={toggleTechList}
        >
          x
        </button>
      </div>
    )
  );
}

function ProjectCarouselShowTechTagButton() {
  const context = useContext(ProjectCarouselContext);

  if (!context) {
    return null;
  }

  const { toggleTechList } = context;
  return (
    <button
      onClick={toggleTechList}
      className={
        'absolute bottom-2 right-2 z-20 text-xs font-bold tracking-widest text-text-primary-red transition-all duration-500 hover:-translate-y-1'
      }
    >
      SHOW TECH TAG
    </button>
  );
}

function ProjectCarouselThumbnail({ children }: ChildrenProps) {
  const context = useContext(ProjectCarouselContext);

  if (!context) {
    return null;
  }

  const { document } = context;
  return (
    <div
      className={
        'relative aspect-square w-11/12 overflow-hidden rounded-md bg-white opacity-70 transition-all duration-500 group-hover:opacity-100'
      }
    >
      {isImageSrcTruthy(document.thumbnail) ? (
        <Image
          sizes={'500'}
          src={document.thumbnail}
          alt={'project thumbnail'}
          className={'object-contain'}
          fill
        />
      ) : null}
      {children}
    </div>
  );
}
// ======================================= function definition =======================================

// ======================================= assignment =======================================
ProjectsCarousel.ShowMore = ProjectCarouselShowMore;

ProjectsCarousel.Empty = ProjectEmptyContent;

ProjectsCarousel.Item = ProjectCarouselItem;

ProjectsCarousel.BottomHighlight = ProjectCarouselBottomHighlight;

ProjectsCarousel.Latest = ProjectCarouselLatestTag;

ProjectsCarousel.Title = ProjectCarouselTitle;

ProjectsCarousel.Description = ProjectCarouselDescription;

ProjectsCarousel.Info = ProjectCarouselInfo;

ProjectsCarousel.TechTagList = ProjectCarouselTechTagList;

ProjectsCarousel.ShowTechTagButton = ProjectCarouselShowTechTagButton;

ProjectsCarousel.Thumbnail = ProjectCarouselThumbnail;
// ======================================= assignment =======================================

export default ProjectsCarousel;
