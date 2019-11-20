import * as React from 'react';
import { matchPath } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import ROUTES from './routes';

import { IRouteProps } from '../types';

export const findActiveRoute = (url: string) => {
  let activeRoute = null;
  let availableRoutes = [...ROUTES];

  const searchRoutes = (routes: IRouteProps[]) => {
    routes.forEach((route: any) => {
      const match = matchPath(url, { ...route, exact: true });
      if (match) {
        activeRoute = route;
      }

      if (route.routes) {
        availableRoutes = [...availableRoutes, ...route.routes];
      }
    });

    availableRoutes.shift();
  };

  while (!activeRoute && availableRoutes.length) {
    searchRoutes(availableRoutes);
  }

  return activeRoute;
};

export const renderRoutes = (
  routes: IRouteProps[],
  extraProps = {},
  switchProps = {}
) => {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          exact={route.exact}
          key={i}
          path={route.path}
          render={(props: any) => (
            <route.component {...props} {...extraProps} route={route} />
          )}
          strict={route.strict}
        />
      ))}
    </Switch>
  ) : null;
};
