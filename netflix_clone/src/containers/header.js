import React from 'react';
import { Header , Footer} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import config from '../fixtures/config'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <div style={{display: 'flex'}}>
        <Footer.Lang className='lang-header'>
                {config.lang}
        </Footer.Lang>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </div>
      </Header.Frame>
      {children}
    </Header>
  );
}
