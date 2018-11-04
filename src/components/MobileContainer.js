import React, { Component } from 'react';
import {
  Container,
  Menu,
  Responsive,
} from 'semantic-ui-react';

import PropTypes from 'prop-types';

import HomepageHeading from './HomepageHeading';

class MobileContainer extends Component {
  render() {
    const { children, signup } = this.props

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Container>
          <Menu inverted secondary size='large'>
            <Menu.Item>Fountain</Menu.Item>
          </Menu>
        </Container>
        <HomepageHeading mobile signup={signup} />
        {children}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
  signup: PropTypes.func,
}

export default MobileContainer;
