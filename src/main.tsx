import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, Global } from '@mantine/core';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Teko, sans-serif',
        headings: {
          fontFamily: 'Teko, sans-serif',
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
