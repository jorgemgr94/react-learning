import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import LoadingOrError from './components/LoadingOrError';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';
import Template from './components/Template';

import { LoadingProvider } from './contexts/LoadingContext';

const Debounce = lazy(() => import('./pages/Debounce'));
const UploadFile = lazy(() => import('./pages/UploadFile'));
const Memoization = lazy(() => import('./pages/Memoization'));
const FormValidation = lazy(() => import('./pages/FormValidation'));
const SubmitHook = lazy(() => import('./pages/SubmitHook'));
const DisplayLocations = lazy(() => import('./pages/DisplayLocations'));

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache()
});

export default function App () {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ErrorBoundary fallback={<ErrorPage />}>
          <Suspense fallback={<LoadingOrError />}>
            <LoadingProvider>
              <Template>
                <Routes>
                  <Route path="/debounce" element={<Debounce />} />
                  <Route path="/upload-file" element={<UploadFile />} />
                  <Route path="/memoization" element={<Memoization />} />
                  <Route path="/form-validation" element={<FormValidation />} />
                  <Route path="/submit-hook" element={<SubmitHook />} />
                  <Route
                    path="/display-locations"
                    element={<DisplayLocations />}
                  />

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
