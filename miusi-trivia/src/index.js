import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
      domain='dev-hv5xcs-z.us.auth0.com'
      clientId='RxvZhjWwAw8dxmCJRzmJsOWN9fPaYJoz'
      redirectUri={window.location.origin}
      audience=""
      scope="openid profile email"
      >
      <App />
    </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
