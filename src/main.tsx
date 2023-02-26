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
          sizes: {
            h1: {
              fontSize: 48,
              lineHeight: .9,
            },
            h2: {
              fontSize: 20,
            },
            h3: {
              fontSize: 20,
            },
          },
        },
        fontSizes: {
          xs: 16,
          sm: 18,
          md: 20,
          lg: 22,
          xl: 24,
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
