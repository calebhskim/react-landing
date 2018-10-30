import React from 'react';
import {
  Container,
  Grid,
  Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ children, signup }) => (
  <div>
    <DesktopContainer signup={signup}>{children}</DesktopContainer>
    <MobileContainer signup={signup}>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = (props) => (
  <ResponsiveContainer signup={props.signup}>
    <Container className='points'>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header as='h4' inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h4' inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
          <Grid.Column width={5}>
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
export default HomepageLayout;
