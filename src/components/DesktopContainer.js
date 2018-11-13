import React, { Component } from 'react';
import {
  Container,
  Menu,
  Responsive,
  Visibility
} from 'semantic-ui-react';

import PropTypes from 'prop-types';

import HomepageHeading from './HomepageHeading';

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { appKey, children, signup } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item>{appKey}</Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading signup={signup} />
        </Visibility>
        {children}
      </Responsive>
    )
  }
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
  signup: PropTypes.func,
};

export default DesktopContainer;
