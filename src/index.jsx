import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { GithubHomepage } from './screens/GithubHomepage';

const app = document.getElementById('app');
const root = ReactDOMClient.createRoot(app);
root.render(<GithubHomepage />);
