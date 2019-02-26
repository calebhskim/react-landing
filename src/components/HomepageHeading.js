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
    this.onSignup = this.onSignup.bind(this);
    this.onSignupAgain = this.onSignupAgain.bind(this);
    this.state = {
      email: '',
      signedUp: false,
    };
  }
  
  handleEmailUpdate(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onSignup() {
    this.setState({
      signedUp: true,
    });
  }

  onSignupAgain() {
    this.setState({
      email: '',
      signedUp: false,
    });
  }

  render() {
    const { email, signedUp } = this.state; 
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
          onChange={this.handleEmailUpdate}
          action={
            <Button
              disabled={!isValid || email === '' || signedUp}
              primary
              onClick={() => signup(email, this.onSignup)}
            >
              Sign Up!
              <Icon name='right arrow' />
            </Button>
          }
          placeholder='email'
          value={email}
        />
        {signedUp &&
        <Header
          as='h4'
          content={<a onClick={() => this.onSignupAgain()}>You're signed up! Sign up again?</a>}
          inverted
          style={{
            fontWeight: 'normal',
          }}
        />}
      </Container>
    );
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
  signup: PropTypes.func,
};

export default HomepageHeading;
