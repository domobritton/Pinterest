import React from 'react';
import GreetingContainer from './header/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
      </header>
      <SignupFormContainer />
    </div>
  );
};

export default App;