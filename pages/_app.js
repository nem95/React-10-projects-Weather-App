import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../utils/store';

import { ThemeContext, theme } from '../context/theme-context';
import '../public/style.css';
import Layout from '../components/Layout';

// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  const [themeState, setThemeState] = useState(theme.light)

  const toggleTheme = () => {
    setThemeState(themeState === theme.dark ? theme.light : theme.dark);
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme: themeState, toggleTheme }}>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </Provider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
