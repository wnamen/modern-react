import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Card, Container, Heading } from '../../components';
import { translate } from '../../utils';

interface INotFoundProps {
  locale: string;
}

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

class NotFound extends React.Component<INotFoundProps> {
  public render = () => {
    const { locale } = this.props;

    return (
      <Container>
        <Card>
          <Heading type="h1" weight={600}>
            {translate(locale, 'notFound.404')}
          </Heading>
          <ButtonContainer>
            <Heading margin="0 0 15px 0" type="h3" weight={600}>
              {translate(locale, 'notFound.doesNotExist')}
            </Heading>
            <Link style={{ width: '100%' }} to={'/home'}>
              <Button width="100%">
                {translate(locale, 'notFound.backHome')}
              </Button>
            </Link>
          </ButtonContainer>
        </Card>
      </Container>
    );
  };
}

const mapStateToProps = ({ app: { locale } }) => ({
  locale,
});

export default withRouter(connect(mapStateToProps)(NotFound));
