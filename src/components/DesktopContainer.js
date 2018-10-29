import React, { Component } from 'react';
import {
  Responsive,
  Segment,
  Menu,
  Container,
  Button,
  Visibility
} from 'semantic-ui-react';

import PropTypes from 'prop-types';

import HomepageHeading from './HomepageHeading';

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, signup } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item>Fountain</Menu.Item>
                <Menu.Item>About</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading signup={signup} />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
