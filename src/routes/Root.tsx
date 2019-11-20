import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ROUTES from './routes';

import { updateActiveRoute } from '../actions';
import { Colors } from '../constants';
import { findActiveRoute, renderRoutes } from '../routes/Router';

interface IRootProps {
  location: any;
  route: { routes: object[] };

  updateRoute: (route: object) => any;
}

const RootContainer = styled.div`
  background-color: ${Colors.white};
  color: ${Colors.grayDark};
  font-family: Barlow !important;
  margin: 0;
  padding: 0;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

class Root extends React.Component<IRootProps> {
  constructor(props: IRootProps) {
    super(props);
  }

  public componentDidMount = () => {
    const { location, updateRoute } = this.props;
    const activeRoute = findActiveRoute(location.pathname);

    updateRoute(activeRoute);
  };

  public componentDidUpdate = (prev: any) => {
    const { location, updateRoute } = this.props;

    if (location.pathname !== prev.location.pathname) {
      const activeRoute = findActiveRoute(location.pathname);

      updateRoute(activeRoute);
    }
  };

  public render = () => {
    return (
      <RootContainer>
        <Switch>{renderRoutes(ROUTES)}</Switch>
      </RootContainer>
    );
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  updateRoute: (route: object) => dispatch(updateActiveRoute(route)),
});

const mapStateToProps = ({ app }: any) => ({
  app,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
