import * as React from 'react';

import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

import MainLayout from '../layouts/MainLayout';

const routes = [
  {
    component: MainLayout,
    routes: [
      {
        component: Home,
        exact: true,
        path: '/',
      },
      {
        component: NotFound,
        path: '/:noMatch',
      },
    ],
  },
];

export default routes;
