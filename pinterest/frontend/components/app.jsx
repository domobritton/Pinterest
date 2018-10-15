import React from 'react';
import HeaderContainer from './header/header_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PinsIndexContainer from './pins/pins_index_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreatePinFormContainer from './pins/create_pin_container';
import PinShowContainer from './pins/pin_show_container';
import Modal from './modal/modal';

const App = () => {
  return (
      <div>
          <Modal />
          <ProtectedRoute exact path='/pins' component={CreatePinFormContainer} />
          <ProtectedRoute path='/' component={HeaderContainer} />
          <Switch>
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <ProtectedRoute exact path='/' component={PinsIndexContainer} />
          <ProtectedRoute exact path='/pin/:id' component={PinShowContainer} />
        </Switch>
      </div>
  );
};

export default App;
