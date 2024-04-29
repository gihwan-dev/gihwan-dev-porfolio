import { createContext } from 'react';
import type { ContextState } from '../../types';

const ProjectCarouselContext = createContext<ContextState | undefined>(
  undefined,
);

export default ProjectCarouselContext;
