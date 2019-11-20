import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Content } from '../components';
import { Colors } from '../constants';
import { renderRoutes } from '../routes/Router';
import { IRouteProps } from '../types';

interface IMainLayoutProps {
  activeRoute: IRouteProps;
  route: { routes: object[] };
}

const MainLayoutContainer = styled.div`
  background-color: ${Colors.grayLighter};
`;

class MainLayout extends React.Component<IMainLayoutProps> {
  constructor(props: IMainLayoutProps) {
    super(props);
  }

  public render = () => {
    const { route } = this.props;

    return (
      <MainLayoutContainer>
        <Content>{renderRoutes(route.routes)}</Content>
      </MainLayoutContainer>
    );
  };
}

const mapStateToProps = ({ app: { activeRoute } }: any) => ({
  activeRoute,
});

export default withRouter(connect(mapStateToProps)(MainLayout));
