import React from 'react';
import { withAuthenticator, SignOut } from 'aws-amplify-react'
import Amplify from 'aws-amplify';

import aws_exports from './aws-exports';
import './App.css';

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <SignOut/>
      <header className="App-header">
        Amplify Testing!
      </header>
    </div>
  );
}

export default withAuthenticator(App);
