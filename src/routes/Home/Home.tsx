import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Card, Container, P } from '../../components';
import { translate } from '../../utils';

interface IHomeProps {
  locale: string;
}

const CardContainer = styled.div`
  padding: 50px;
`;

class Home extends React.Component<IHomeProps> {
  constructor(props: any) {
    super(props);
  }

  public render = () => {
    const { locale } = this.props;

    return (
      <Container>
        <Card height="650px" width="550px">
          <CardContainer>
            <P size="22px">{translate(locale, 'home.welcome')}</P>
          </CardContainer>
        </Card>
      </Container>
    );
  };
}

const mapStateToProps = ({ app: { locale } }) => ({
  locale,
});

export default withRouter(connect(mapStateToProps)(Home));
