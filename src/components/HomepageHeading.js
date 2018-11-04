import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Input
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import validator from 'validator';

class HomepageHeading extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.state = {
      email: '',
    };
  }
  
  handleEmailUpdate(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    const { email } = this.state; 
    const { mobile, signup } = this.props
    const isValid = validator.isEmail(email);

    return (
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Input
          error={!isValid && email !== ''}
          onChange={this.handleEmailUpdate} action={
            <Button disabled={!isValid || email === ''} primary onClick={() => signup(email)}>
              Sign Up!
              <Icon name='right arrow' />
            </Button>
          }
          placeholder='email'
        />
      </Container>
    );
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
  signup: PropTypes.func,
};

export default HomepageHeading;
