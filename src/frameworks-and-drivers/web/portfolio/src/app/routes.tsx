import { RouteObject } from 'react-router-dom';
import { MainSiteWrapper } from '../views/main-site/main-site-wrapper';
import { FrameWrapper } from './frame/frame-wrapper';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <FrameWrapper />,
    children: [
      {
        index: true,
        element: <MainSiteWrapper />,
      },
      {
        path: '*',
        element: <div>Errors</div>,
      },
    ],
  },
];
