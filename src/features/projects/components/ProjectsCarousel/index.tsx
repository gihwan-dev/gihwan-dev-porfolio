import React, { useState } from 'react';
import type { ProviderProps } from '../../types';
import ProjectCarouselContext from './ProjectsCarouselContext';
import ProjectCarouselShowMore from './ProjectsCarouselShowMore';
import ProjectEmptyContent from './ProjectsCarouselEmptyContent';
import ProjectCarouselItem from './ProjectsCarouselItem';
import ProjectCarouselBottomHighlight from './ProjectsCarouselBottomHilight';
import ProjectCarouselLatestTag from './ProjectsCarouselLatestTag';
import ProjectCarouselTitle from './ProjectsCarouselTitle';
import ProjectCarouselDescription from './ProjectsCarouselDescription';
import ProjectCarouselInfo from './ProjectsCarouselInfo';
import ProjectCarouselTechTagList from './ProjectsCarouselTechTagList';
import ProjectCarouselThumbnail from './ProjectsCarouselThumbnail';
import ProjectCarouselShowTechTagButton from './ProjectsCarouselShowTechTagButton';

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

export default ProjectsCarousel;
