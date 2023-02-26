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
              fontWeight: 700,
              lineHeight: 1,
            },
            h2: {
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 1,
            },
            h3: {
              fontSize: 20,
              fontWeight: 200,
              lineHeight: 1,
            },
            h4: {
              fontSize: 18,
              fontWeight: 200,
              lineHeight: 1,
            },
          },
        },
        fontSizes: {
          md: 22,
          sm: 16,
        },
        lineHeight: '24px',
        globalStyles: (theme) => ({
          body: {
            ...theme.fn.fontStyles(),
            p: {
              fontWeight: '200',
            },
          },
        }),
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
