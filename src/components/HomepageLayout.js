import React from 'react';
import {
  Container,
  Grid,
  Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Analytics from './animations/Analytics';
import Chat from './animations/Chat';
import DesktopContainer from './DesktopContainer';
import Map from './animations/Map';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ appKey, children, signup }) => (
  <div>
    <DesktopContainer appKey={appKey} signup={signup}>{children}</DesktopContainer>
    <MobileContainer appKey={appKey} signup={signup}>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  appKey: PropTypes.string,
  children: PropTypes.node,
  signup: PropTypes.func,
}

const HomepageLayout = (props) => (
  <ResponsiveContainer appKey={props.appKey} signup={props.signup}>
    <Container className='points'>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column className='point' width={5}>
            <Analytics />
            <Header as='h4' inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
          <Grid.Column className='point' width={5}>
            <Chat />
            <Header as='h4' inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
          <Grid.Column className='point' width={5}>
            <Map />
            <Header as='h4' inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </ResponsiveContainer>
)

HomepageLayout.propTypes = {
  signup: PropTypes.func,
}

export default HomepageLayout;
