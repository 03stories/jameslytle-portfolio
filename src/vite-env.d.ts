/// <reference types="vite/client" />

import { Project, AboutContent, HomeContent } from './utils/contentLoader';

declare global {
  const __PROJECTS__: Project[] | undefined;
  const __ABOUT_CONTENT__: AboutContent | undefined;
  const __HOME_CONTENT__: HomeContent | undefined;
}