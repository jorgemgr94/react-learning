import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { routes } from '@src/constants/routes';

import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';
import LoadingOrError from './components/LoadingOrError';
import Template from './components/Template';
import { LoadingProvider } from './contexts/LoadingContext';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ErrorBoundary fallback={<ErrorPage />}>
          <Suspense fallback={<LoadingOrError />}>
            <LoadingProvider>
              <Template>
                <Routes>
                  {routes.map((route) => <Route key={route.path} path={route.path} element={route.component} />)}

                  {/* Navigate to /debounce as default route */}
                  <Route
                    path="*"
                    element={<Navigate to="/debounce" replace={true} />}
                  />
                </Routes>
              </Template>
            </LoadingProvider>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </ApolloProvider>
  );
}
