import { lazy } from 'react';
const Debounce = lazy(() => import('@src/pages/Debounce'));
const UploadFile = lazy(() => import('@src/pages/UploadFile'));
const Memoization = lazy(() => import('@src/pages/Memoization'));
const FormValidation = lazy(() => import('@src/pages/FormValidation'));
const SubmitHook = lazy(() => import('@src/pages/SubmitHook'));
const DisplayLocations = lazy(() => import('@src/pages/DisplayLocations'));
const Player = lazy(() => import('@src/pages/Player'));

export const routes = [
  {
    name: 'Debounce',
    path: '/debounce',
    component: <Debounce />,
  },
  {
    name: 'Upload File',
    path: '/upload-file',
    component: <UploadFile />,

  },
  {
    name: 'Memoization',
    path: '/memoization',
    component: <Memoization />,

  },
  {
    name: 'Form Validation',
    path: '/form-validation',
    component: <FormValidation />,

  },
  {
    name: 'Submit Hook',
    path: '/submit-hook',
    component: <SubmitHook />,

  },
  {
    name: 'Display Locations',
    path: '/display-locations',
    component: <DisplayLocations />,
  },
  {
    name: 'Player',
    path: '/player',
    component: <Player />,
  },
];
